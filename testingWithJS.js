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

//Checking multiple without jest****** * /
const testingMulti = () => {
    const checking3 = googleSearch('soup', dbMock);
    const checking4 = googleSearch('cat', dbMock);
    const checking5 = googleSearch('dog', dbMock);

    if (_.isEqual(checking3, ['allsouprecipes.com', 'awesomesoups.com'])) {
        if (_.isEqual(checking4, ['oohhcats.com', 'awesomecats.com'])) {
            if (_.isEqual(checking5, ['awesomedogs.com'])) {

        return true
    }}};
    return false
        ;
}
console.log(testingMulti())

//testing multiple again and console.logging which test failed
const testingMulti2 = () => {
    const checking3 = _.isEqual(googleSearch('soup', dbMock), ['allsouprecipes.com', 'awesomesoups.com'])
    const checking4 = _.isEqual(googleSearch('cat', dbMock), ['oohcats.com', 'awesomecats.com'])
    const checking5 = _.isEqual(googleSearch('dog', dbMock), ['awesomedogs.com'])

    if (checking3 && checking4 && checking5) {
        return true
    };
    return [checking3, checking4, checking5]
        ;
}
console.log(testingMulti2())
//again this time with JSON.stringify
const testingMulti3 = () => {
    const test1 = JSON.stringify(googleSearch('soup', dbMock)) === JSON.stringify(['allsouprecipes.com', 'awesomesoups.com'])
    const test2 = JSON.stringify(googleSearch('cat', dbMock)) === JSON.stringify(['oohcats.com', 'awesomecats.com'])
    const test3 = JSON.stringify(googleSearch('dog', dbMock)) === JSON.stringify(['awesomedogs.com'])

    if (test1 && test2 && test3) {
        return true
    };
    return [test1, test2, test3]
        ;
}
console.log(testingMulti3())

