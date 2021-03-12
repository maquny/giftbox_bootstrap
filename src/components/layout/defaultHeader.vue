<template>
    <div class="defaultHeader" :class='{ hidden_cont: not_header }'>
        <headerContentsPc v-if="deviceInfor == 'desktop'"></headerContentsPc>
        <headerContentsMobile v-else-if="deviceInfor == 'mobile'"></headerContentsMobile>
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
                not_header: false,
                isActive: true,
            }
        },
        created() {
            this.diveceHiddenChecked();
        },
        components: {
            headerContentsPc,
            headerContentsMobile,
        },
        methods: {
            diveceHiddenChecked(){
                if(this.$route.name == 'signUp' || this.$route.name == 'logInFrom' || this.$route.name == 'signUpComplete' || this.$route.name == 'signUpUserFrom' || this.$route.name == 'findId' || this.$route.name == 'resetPassWord'){
                    this.not_header = true;
                } else {
                    this.not_header = false;
                }
            },
        },
        watch: {
            $mq (val){
                this.deviceInfor = val
            },

            $route (data){
                this.diveceHiddenChecked();
            },

            not_header(params){
                this.diveceHiddenChecked();
            }
        }
    }
</script>

<style scoped>
*:focus { outline:none; }
.defaultHeader{position:relative;z-index:20;}
.hidden_cont{display:none;}
</style>
