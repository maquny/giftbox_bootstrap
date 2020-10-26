import logInBody from '@/views/logIn'
import logInFrom from '@/components/memBer/logInFrom'
import findId from '@/components/memBer/findId'
import resetPassWord from '@/components/memBer/resetPassWord'
import successFindId from '@/components/memBer/successFindId'

export default [
    {
        path: '/logIn',
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
 
