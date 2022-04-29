//import/require the functions to be tested here
const googleSearch = require('./script');
const anotherSearch = require('./script');


//syntax for jest it('some string here', ()={}) followed by the function to test
// it('this is a test', ()=>{

// })
it('this is a test', () => {
console.log(googleSearch)
})

it('this is a test', () => {
    console.log(anotherSearch)
})