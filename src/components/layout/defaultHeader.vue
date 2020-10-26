<template>
    <div class="defaultHeader">
        <headerContentsPc v-if="deviceInfor == 'desktop'" :logInStaVal="logInSta"></headerContentsPc>
        <headerContentsMobile v-else-if="deviceInfor == 'mobile'" :logInStaVal="logInSta"></headerContentsMobile>
    </div>
</template>

<script>
    import axios from "axios"
    import headerContentsPc from '@/components/layout/defaultHeaderPc'
    import headerContentsMobile from '@/components/layout/defaultHeaderMobile'

    export default {
        name: 'defaultHeader',
        data() {
            return{
                deviceInfor: this.$mq,
                logInSta: false,
                logIn: false,
            }
        },
        created() {
            this.loginSession();
        },
        components: {
            headerContentsPc,
            headerContentsMobile,
        },
        methods: {
            loginSession: function(){
                axios
                .get(process.env.VUE_APP_BASE_URL+'/users/checkCurrentAuth/', {withCredentials: true})
                .then( res => {
                    this.logInSta = res
                    // console.log(res, res.data);
                })
                .catch( err => {
                    console.log(err.response.data.message);
                });
            },
            logOut(){
                axios
                .get(process.env.VUE_APP_BASE_URL+'/logout', {withCredentials: true})
                .then( res => {
                    console.log(res.data);
                })
                .catch( err => {
                    console.log(err.response.data.message);
                });
            },
        },
        watch: {
            logInSta(val){
                //console.log(val)
            },

            $mq (val){
                this.deviceInfor = val
            },
            $route (data){
                //console.log(data)
            }
        }
    }
</script>

<style scoped>
*:focus { outline:none; }
.defaultHeader{position:relative;z-index:20;}
</style>
