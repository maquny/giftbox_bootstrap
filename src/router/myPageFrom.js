import myPageBody from '@/views/myPage'
import accountManageMent from '@/components/myPage/accountManageMent'
import giftCardDealHistory from '@/components/myPage/giftCardDealHistory'
import giftCardDealHistoryDetail from '@/components/myPage/giftCardDealHistoryDetail'
import giftCardSaleLimitCheck from '@/components/myPage/giftCardSaleLimitCheck'
import privacyManageMent from '@/components/myPage/privacyManageMent'

export default [
    {
        path: '/myPage',
        component: myPageBody,
        children: [
            {
                path: '',
                name: 'accountManageMent',
                component: accountManageMent
            },
            {
                path: 'giftCardDealHistory',
                name: 'giftCardDealHistory',
                component: giftCardDealHistory
            },
            {
                path: 'giftCardDealHistoryDetail',
                name: 'giftCardDealHistoryDetail',
                component: giftCardDealHistoryDetail
            },
            {
                path: 'giftCardSaleLimitCheck',
                name: 'giftCardSaleLimitCheck',
                component: giftCardSaleLimitCheck
            }
            ,
            {
                path: 'privacyManageMent',
                name: 'privacyManageMent',
                component: privacyManageMent
            }
        ]
    }
]

