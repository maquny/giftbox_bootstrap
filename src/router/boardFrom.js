import boardBody from '@/views/board'
import noticeBoard from '@/components/board/noticeBoard'
import frequentlyAskedQuestions from '@/components/board/frequentlyAskedQuestions'
import serviceCenter from '@/components/board/serviceCenter'
import userInquiry from '@/components/board/userInquiry'
import userInquiryWriting from '@/components/board/userInquiryWriting'
import test from '@/components/board/test'

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
                name: 'userInquiry',
                component: userInquiry
            },
            {
                path: 'userInquiryWriting',
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

