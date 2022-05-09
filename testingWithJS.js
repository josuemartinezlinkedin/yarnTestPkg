//import/require the functions to be tested here
const googleSearch = require('./script');
//yarn add lodash
const _ = require('lodash');

//creating a dummy database to use for testing and 
//it should emulates the actual data structure
dbMock = [
    //list is different from actual db
    'oohhcats.com',
    'allsouprecipes.com',
    'niceflowers.com',
    'someanimals.com',
    'mypets.com',
    'best.com',
    'awesomesoups.com',
    'awesomepets.com',
    'awesomedogs.com',
    'awesomecats.com'
];


//syntax for jest it('some string here', ()={}) followed by the function to test
// it('this is a test', ()=>{

// })
//testing using console.log
const checking = googleSearch('soup', dbMock);
//can log checking2 to see results if expected doesn't match
// console.log(checking2)
console.log(JSON.stringify(checking)===JSON.stringify(['allsouprecipes.com','awesomesoups.com']))

//testing by creating a function then console loggin result
const testing = () => {
    const checking2 = googleSearch('soup',dbMock);
    if (_.isEqual(checking2, ['allsouprecipes.com', 'awesomesoups.com'])){
     return true
    }; 
    return false
    ;}
console.log(testing())

const testing3 = () => {
    const check = googleSearch('soup', dbMock);
    return (
    _.isEqual(check, ['allsouprecipes.com', 'awesomesoups.com']) ? true
    : false
)}
console.log(testing3())
if (testing && testing3) console.log("alright alright, we moving... we moving and grooving")