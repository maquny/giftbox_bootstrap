<template>
    <b-container class="bv-example-row mt-md-5 mt-4 mb-md-5 mb-4">
        <h1>파일 리스트</h1>
        <div v-for="(file, index) in fileList" :key="file.Key">
            #{{index+1}} {{file.Key}}
            <b-button @click="deleteFile(file.Key)" color="res">x</b-button>
        </div>

        <h1>파일 업로더</h1>
        <input id="file-selector" ref="file" type="file" @change="handleFileUplpad()">
        <b-button @click="uploadFile" color="primary">업12로드</b-button>

        <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
    </b-container>
</template>


<script>
    import AWS from 'aws-sdk'
    import CKEditor from '@ckeditor/ckeditor5-vue'
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'HelloWorld',
        data () {
            return {
                file: null,
                albumBucketName: process.env.VUE_APP_BUCKET,
                bucketRegion: process.env.VUE_APP_REGION,
                IdentityPoolId: process.env.VUE_APP_IdentityPoolId,
                fileList:[],
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                    // 'extraPlugins': [uploader]
                    extraPlugins: [MyCustomUploadAdapterPlugin],
                }
            }
        },

        created () {
            //this.getFiles()
            console.log("Parent created")
        },
        mounted() { 
            console.log("Parent mounted") 
        },

        methods: {
            store()
            {
                // Some code
            },

            uploader(editor)
            {
                console.log(editor)
                // editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
                //     return new UploadAdapter( loader );
                // };
            },

            handleFileUplpad () {
                this.file = this.$refs.file.files[0]
                console.log(this.file, '파일이 업로드 되었습니다')
            },

            getFiles () {
                AWS.config.update({
                    region: this.bucketRegion,
                    credentials: new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: this.IdentityPoolId
                    })
                })

                const s3 = new AWS.S3({
                    apiVersion: '2006-03-01',
                    params: {
                        Bucket: this.albumBucketName
                    }
                })

                s3.listObjects({
                    Delimiter: '/'
                }, (err, data) => {
                    if (err) {
                      return alert('There was an error listing your albums: ' + err.message);
                  } else {
                    this.fileList = data.Contents
                  }
              });
            },
            uploadFile () {
                AWS.config.update({
                    region: this.bucketRegion,
                    credentials: new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: this.IdentityPoolId
                    })
                })

                const s3 = new AWS.S3({
                    apiVersion: '2006-03-01',
                    params: {
                        Bucket: this.albumBucketName
                    }
                })

                let photoKey = 'upload/'+this.file.name

                s3.upload({
                    Key: photoKey,
                    Body: this.file,
                    ACL: 'public-read'
                }, (err, data) => {
                    if (err) {
                        return alert('There was an error uploading your photo: ', err.message);
                    }
                });
            },

            deleteFile (Key) {
                AWS.config.update({
                    region: this.bucketRegion,
                    credentials: new AWS.CognitoIdentityCredentials({
                        IdentityPoolId: this.IdentityPoolId
                    })
                })

                const s3 = new AWS.S3({
                    apiVersion: '2006-03-01',
                    params: {
                        Bucket: this.albumBucketName
                    }
                })

                s3.deleteObject({
                    Key: Key
                }, (err, data) => {
                    if (err) {
                        return alert('There was an error deleting your photo: ', err.message);
                    }
                    alert('삭제되었습니다.')
                    this.getFiles()
                });
            },
        }
    }

    class UploadAdapter {
      constructor(loader) {
          this.loader = loader;
      }
      upload() {
          return this.loader.file.then( file => new Promise(((resolve, reject) => {
              this._initRequest();
              this._initListeners( resolve, reject, file );
              this._sendRequest( file );
          })))
      }

      _initRequest() {
          const xhr = this.xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://dev-hourfun-front.s3.ap-northeast-2.amazonaws.com/upload/', true);
          xhr.responseType = 'json';
          console.log(xhr)
      }

      _initListeners(resolve, reject, file) {
          const xhr = this.xhr;
          const loader = this.loader;
          const genericErrorText = '파일을 업로드 할 수 없습니다.'
          xhr.addEventListener('error', () => {reject(genericErrorText)})
          xhr.addEventListener('abort', () => reject())
          console.log(xhr)
          xhr.addEventListener('load', () => {
              const response = xhr.response
              if(!response || response.error) {
                  return reject( response && response.error ? response.error.message : genericErrorText );
              }

              resolve({
                  default: response.url //업로드된 파일 주소
              })
          })
      }

      _sendRequest(file) {
           AWS.config.update({
               region: process.env.VUE_APP_REGION,
               credentials: new AWS.CognitoIdentityCredentials({
                   IdentityPoolId: process.env.VUE_APP_IdentityPoolId
               })
           })
           const s3 = new AWS.S3({
               apiVersion: '2006-03-01',
               params: {
                   Bucket: process.env.VUE_APP_BUCKET
               }
           })

           // if(file.size > 5000){
           //     return alert('용량이 너무 큼니다.')
           // }
           console.log(file)
           let photoKey = 'upload/'+file.name
           s3.upload({
               Key: photoKey,
               Body: file,
               ACL: 'public-read'
           }, (err, data) => {
               if (err) {
                   return console.log('There was an error uploading your photo: ', err.message);
               }
               console.log(data, 'upload end')
               console.log(data.Location)
           });
      }
  }

  function MyCustomUploadAdapterPlugin(editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
          return new UploadAdapter(loader)
      }
  }
</script>
