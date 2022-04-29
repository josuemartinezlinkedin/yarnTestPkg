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

const googleSearch = (searchInput) => {
    // idea is search something, and if a match, return it
    const matches = googleDatabase.filter(website => {
        return website.includes(searchInput)
    })
    //return matches to the user
    return matches.length > 3 ? matches.slice(0,3) : matches;
}
// created search twice just to edit it a bit before testing
const anotherSearch = (word) => {
    const matches = []
    matches.push(
        googleDatabase.filter(items => items.includes(word)
    ));
    return matches[0].length > 2 ?
     `Top two results, like actually the top two na\n${matches[0].slice(0, 1)} and ${matches[0].slice(1, 2)}` 
        : `Top notch result eh ${ matches[0]}`
}

console.log(googleSearch('soup'))
console.log(anotherSearch('soup'))

module.exports = [googleSearch, anotherSearch]