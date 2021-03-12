import logInBody from '@/views/logIn'
import logInFrom from '@/components/memBer/logInFrom'
import findId from '@/components/memBer/findId'
import resetPassWord from '@/components/memBer/resetPassWord'
import successFindId from '@/components/memBer/successFindId'
import store from "../store"

//인증된 유저는 갈수가 없는 컨텐츠
const rejectAuthUser = (to, from, next) => {
    store.dispatch('mutationsCheckSession').then(function(userSta) {
        if(userSta.status != 200){
            next()
        } else {
            next('/')
            store.dispatch('logOut')
        }
    });
}

//인증되지 않은 유저는 접근할수 없다.
const onlyAuthUser = (to, from, next) => {
    store.dispatch('mutationsCheckSession').then(function(userSta) {
        if(userSta.status != 200){
            alert('로그인이 필요한 페이지 입니다.')
            store.dispatch('logOut')
        } else {
            next()
        }
    });
}

export default [
    {
        path: '/logIn',
        beforeEnter: rejectAuthUser,
        component: logInBody,
        children: [
            {
                path: '',
                name: 'logInFrom',
                component: logInFrom
            },
            {
                path: 'findId',
                name: 'findId',
                component: findId
            },
            {
                path: 'resetPassWord',
                name: 'resetPassWord',
                component: resetPassWord
            },
            {
                path: 'successFindId',
                name: 'successFindId',
                component: successFindId
            }
        ]
    }
]
 
