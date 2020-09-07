<template> 
  <div style="height:500px;">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" /> 

    {{editorData}}
  </div>
</template> 
<script> 
import ClassicEditor from '@ckeditor/ckeditor5-build-classic' 
import CKEditor from '@ckeditor/ckeditor5-vue' 
export default { 
name: 'CKEditor', 
  components: {
    ckeditor: CKEditor.component 
  }, data: () => ({ 
    editor: ClassicEditor, 
    editorData: '<p>Content of the editor.</p>', 
    editorConfig: { 
      height: '500px', 
      language: 'ko' 
    } 
  }) 
} 
</script>

<style>
  .ck-editor__editable_inline {
    min-height: 400px;
}
</style>