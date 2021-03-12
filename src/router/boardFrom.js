import boardBody from '@/views/board'
import noticeBoard from '@/components/board/noticeBoard'
import frequentlyAskedQuestions from '@/components/board/frequentlyAskedQuestions'
import serviceCenter from '@/components/board/serviceCenter'
import userInquiry from '@/components/board/userInquiry'
import userInquiryWriting from '@/components/board/userInquiryWriting'
import test from '@/components/board/test'
import store from "../store"
import axios from "axios"

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
        path: '/board',
        component: boardBody,
        children: [
            {
                path: '',
                name: 'noticeBoard',
                component: noticeBoard,
                query:{
                    page: 0,
                    searchText:''
                }
            },
            {
                path: 'frequentlyAskedQuestions',
                name: 'frequentlyAskedQuestions',
                component: frequentlyAskedQuestions,
                query:{
                    page: 0,
                    searchText:''
                }
            },
            {
                path: 'serviceCenter',
                name: 'serviceCenter',
                component: serviceCenter
            },
            {
                path: 'userInquiry',
                beforeEnter: onlyAuthUser,
                name: 'userInquiry',
                component: userInquiry,
                query:{
                    page: 0,
                    searchText:''
                }
            },
            {
                path: 'userInquiryWriting',
                beforeEnter: onlyAuthUser,
                name: 'userInquiryWriting',
                component: userInquiryWriting
            },
            {
                path: 'test',
                name: 'test',
                component: test
            }
        ]
    }
]