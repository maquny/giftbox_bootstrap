import signUpBody from '@/views/signUp'
import signUpFrom from '@/components/memBer/signUpFrom'
import signUpUserFrom from '@/components/memBer/signUpUserFrom'
import signUpAgreeMent from '@/components/memBer/signUpAgreeMent'
import signUpComplete from '@/components/memBer/signUpComplete'

export default [
    {
        path: '/signUp',
        component: signUpBody,
        children: [
            {
                path: '',
                name: 'signUp',
                component: signUpFrom
            },
            {
                path: 'signUpUserFrom',
                name: 'signUpUserFrom',
                component: signUpUserFrom
            },
            {
                path: 'signUpAgreeMent',
                name: 'signUpAgreeMent',
                component: signUpAgreeMent
            },
            {
                path: 'signUpComplete',
                name: 'signUpComplete',
                component: signUpComplete
            }
        ]
    }
]

