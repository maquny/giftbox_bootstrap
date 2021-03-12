import termsBody from '@/views/terms'
import privacyStateMent from '@/components/terms/privacyStateMent'
import termsOfUse from '@/components/terms/termsOfUse'
import store from "../store"

export default [
    {
        path: '/terms',
        component: termsBody,
        children: [
            {
                path: '',
                name: 'privacyStateMent',
                component: privacyStateMent
            },
            {
                path: 'termsOfUse',
                name: 'termsOfUse',
                component: termsOfUse
            }
        ]
    }
]
 
