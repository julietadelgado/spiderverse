const Spiderman = require('./../app/spiderman.js')

describe('Unit Test for Spiderman class', () =>{
    test('1. Create an spiderman object', () => {
        //I want to make an instance of an Spiderman object with this information
        const andrewGarfiel = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
        expect(andrewGarfiel.name).toBe("Spiderman Sony")
        expect(andrewGarfiel.age).toBe(31)
        expect(andrewGarfiel.actor).toBe("Andrew Garfield")
        expect(andrewGarfiel.movies).toBe(2)
        expect(andrewGarfiel.studio).toBe("Sony")
    })
})