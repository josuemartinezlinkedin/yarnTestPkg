const axios = require('axios').default;
const fetch = require('node-fetch')

//making get request with axios without async using default .get and .then
const returningValues = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        //****know your data****//
        // console.log(res.data.slice(0,5))
        // console.log(res.data[i].id)
        // console.log(res.data[i].userId)
        const table = {}
        for (let i = 0; i < res.data.slice(0,4).length; i++) {
            var keys = res.data[i].id
            var ids = res.data[i].userId
            table[`user_${keys}`] = ids
            // console.log(table)
        }
        console.log('not using async', table)
    }
    )
    .catch(err => console.error(err)) // promise
}
returningValues()

const lines = () => {
// console.log(returningValues())
console.log('//****************//')
console.log('//****************//')
console.log('//****************//')
console.log('//First is async and Last is not async//')
console.log('//****************//')
console.log('//****************//')
console.log('//****************//')
}
lines()

//asnyc get request with axios
const sendGetRequest = async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //after logging data took a sample now going to do something with data
        // console.log(res.data.slice(0,3); 
        res.status === 200 ? console.log('using async with axios',res.data.slice(0,3)) : console.log(res.status)   
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};

sendGetRequest();


// //making a post request axios axios
// const newPost = {
//     userId: 1,
//     title: 'A new post',
//     body: 'This is the body of the new post'
// };

// const sendPostRequest = async () => {
//     try {
//         const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };

// sendPostRequest();

//making request using node-fetch
const getPeople = async (fetch) => {
    const getRequest = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await getRequest.json()
    return {
        count: data.count,
        results: data.results
    }
}
getPeople()

//sample of returned data
// {
//     userId: 1,
//         id: 1,
//             title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//                 body: 'quia et suscipit\n' +
//                     'suscipit recusandae consequuntur expedita et cum\n' +
//                     'reprehenderit molestiae ut ut quas totam\n' +
//                     'nostrum rerum est autem sunt rem eveniet architecto'
// }