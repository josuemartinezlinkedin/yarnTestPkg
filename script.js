// simplified version of their search algorithm but similar principles
const googleDatabase = [
    //list of all the websites that it has indexed
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'dogs.com',
    'myfavoritepets.com',
    'pets.com',
    'favoritesoup.com',
    'amazingsoups.com',
    'amazingpets.com',
    'amazingdogs.com',
    'amazingcats.com'
]

const googleSearch = (searchInput, aDatabase) => {
    // idea is search something, and if a match, return it
    const matches = aDatabase.filter(website => {
        return website.includes(searchInput)
    })
    //return matches to the user
    return matches.length > 3 ? matches.slice(0,3) : matches;
};

// created search twice just to edit it a bit before testing
const anotherSearch = (keyword, aDatabase) => {
    const matches = []
    matches.push(
        aDatabase.filter(items => items.includes(keyword)
    ));
    return matches[0].length > 2 ?
     `Top two results, like actually the top two na\n${matches[0].slice(0, 1)} and ${matches[0].slice(1, 2)}` 
        : `Top notch result eh ${ matches[0]}`
};

//checking if returned value is an array
// console.log(Array.isArray(googleSearch('soup', googleDatabase)))

// console.log(anotherSearch('soup', googleDatabase))

module.exports = googleSearch;
//could also export the database but too costly for testing if we had the database 
//also being used there to test one function