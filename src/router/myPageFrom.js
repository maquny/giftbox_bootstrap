import myPageBody from '@/views/myPage'
import accountManageMent from '@/components/myPage/accountManageMent'
import giftCardDealHistory from '@/components/myPage/giftCardDealHistory'
import giftCardDealHistoryDetail from '@/components/myPage/giftCardDealHistoryDetail'
import giftCardSaleLimitCheck from '@/components/myPage/giftCardSaleLimitCheck'
import privacyManageMent from '@/components/myPage/privacyManageMent'
import accountManageMentDetail from '@/components/myPage/accountManageMentDetail'
import privacyManageMentDetail from '@/components/myPage/privacyManageMentDetail'
import withDraw from '@/components/myPage/withDraw'
import store from "../store"

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
        path: '/myPage',
        beforeEnter: onlyAuthUser,
        component: myPageBody,
        children: [
            {
                path: 'accountManageMent',
                name: 'accountManageMent',
                component: accountManageMent
            },
            {
                path: 'giftCardDealHistoryDetail',
                name: 'giftCardDealHistoryDetail',
                component: giftCardDealHistoryDetail,
                query:{
                    idx : 0,
                    page: 0
                }
            },
            {
                path: '',
                name: 'giftCardDealHistory',
                component: giftCardDealHistory,
                query:{
                    page: 0,
                }
            },
            {
                path: 'giftCardSaleLimitCheck',
                name: 'giftCardSaleLimitCheck',
                component: giftCardSaleLimitCheck
            },
            {
                path: 'privacyManageMent',
                name: 'privacyManageMent',
                component: privacyManageMent
            },
            {
                path: 'accountManageMentDetail',
                name: 'accountManageMentDetail',
                component: accountManageMentDetail,
                query:{
                    user: false,
                }
            },
            {
                path: 'privacyManageMentDetail',
                name: 'privacyManageMentDetail',
                component: privacyManageMentDetail,
                query:{
                    user: false,
                }
            },
            {
                path: 'withDraw',
                name: 'withDraw',
                component: withDraw,
                query:{
                    user: false,
                }
            }
        ]
    }
]

