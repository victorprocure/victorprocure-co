export const navigationItems =
    [
        {
            "URL": "/",
            "Title": "Home"
        },
        {
            "URL": "/blog",
            "Title": "Blog"
        },
        {
            "URL": "/contact",
            "Title": "Contact"
        },
    ];

export default async () => await navigationItems;
//(
//     new Promise((resolve) => {
//         navigationItems = [
//             {
//                 "URL": "/",
//                 "Title": "Home"
//             },
//             {
//                 "URL": "/blog",
//                 "Title": "Blog"
//             },
//             {
//                 "URL": "/contact",
//                 "Title": "Contact"
//             },
//         ];


//         resolve(navigationItems);
//     })
// );