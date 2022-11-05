import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        user : USERS[0].user,
        likes: 6969,
        caption:'WEEEE....HUUUUU',
        profile_picture: USERS[0].image,
        commments:[
            {
                user:'BK',
                comment:'WOW',
            },
            {
                user:'Rohan',
                comment:'Noice',
            },
        ],
    },
    {
        imageUrl: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        user : USERS[0].user,
        likes: 6969,
        caption:'WEEEE....HUUUUU',
        profile_picture: USERS[0].image,
        commments:[
            {
                user:'BK',
                comment:'WOW',
            },
            {
                user:'Rohan',
                comment:'lol',
            },
        ],

    }
]