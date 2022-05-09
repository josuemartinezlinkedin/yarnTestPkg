//import/require the functions to be tested here
const googleSearch = require('./script');
const anotherSearch = require('./script');

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
//******* testing anotherSearch function */
it('test for anotherSearch', () => {
    anotherSearch('soups', dbMock)
});
test('testing anotherSearch', () => {
    expect(anotherSearch('soups', dbMock)).toStrictEqual(['awesomesoups.com'])
});

//******* testing googleSearch function */
it('test for googleSearch', () => {
    googleSearch('soups', dbMock)
});
test('testing googleSearch', () => {
    expect(googleSearch('oohh', dbMock)).toEqual(['oohhcats.com']);
});

test('test2 for googleSearch', () => {
    expect(googleSearch('soup', dbMock)).toEqual(['allsouprecipes.com','awesomesoups.com']);
});

//more than one test inside of one test method
test('more tests for googleSearch', () => {
    expect(googleSearch('soup', dbMock)).toEqual(['allsouprecipes.com', 'awesomesoups.com']);
    expect(googleSearch('cookie', dbMock)).toEqual([]);
    expect(googleSearch('cats', dbMock)).toEqual(['oohhcats.com', 'awesomecats.com']);
    expect(googleSearch('awesome', dbMock)).toEqual(['awesomesoups.com', 'awesomepets.com', 'awesomedogs.com']);
});
