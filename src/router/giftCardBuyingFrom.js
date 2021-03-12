import giftCardBody from '@/views/giftCardBuying'
import giftCardInput from '@/components/giftCardPurchase/giftCardInput'
import giftCardComplete from '@/components/giftCardPurchase/giftCardComplete'
// import giftCardSelection from '@/components/giftCardPurchase/giftCardSelection'
import store from "../store"

//인증된 유저는 갈수가 없는 컨텐츠
const rejectAuthUser = (to, from, next) => {
    store.dispatch('mutationsCheckSession').then(function(userSta) {
        if(userSta.status != 200){
            store.dispatch('logOut')
        } else {
            next()
        }
    });
}

//인증되지 않은 유저는 접근할수 없다.
const onlyAuthUser = (to, from, next) => {
    store.dispatch('mutationsCheckSession').then(function(userSta) {
        if(userSta.status != 200){
            alert('로그인이 필요한 페이지 입니다.')
            next('/')
        } else {
            next()
        }
    });
}

export default [
    {
        path: '/giftCardBuying',
        // beforeEnter: onlyAuthUser,
        component: giftCardBody,
        children: [
            {
                path: '',
                name: 'giftCardInput',
                component: giftCardInput
            },
            {
                path: 'giftCardComplete',
                name: 'giftCardComplete',
                component: giftCardComplete,
                query:{
                    idx : 0,
                }
            }
        ]
    }
]