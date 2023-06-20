const Mock = require('mockjs')
const userList = Mock.mock({
    'data|20': [
        {
            'id|+1': 0,
            name: '@cname',
            age: '@integer(18, 60)',
            avatar: Mock.Random.image('125x125'),
        },
    ],
})
// console.log(userList)
module.exports = [
    {
        method: 'get',
        url: '/api/users',
        response: ({ body }) => {
            return {
                code: 200,
                msg: 'success',
                data: userList,
            }
        },
    },
]
