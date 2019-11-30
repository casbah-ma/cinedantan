import { sortByKey, imdbToMovie, idToPoster } from './helpers'
import movies from '../public/database/movies.json'

const friends = [{ name: 'Amir', age: 20 }, { name: 'Beni', age: 30 }, { name: 'Cati', age: 50 }, { name: 'Dan', age: 17 }]

it('sortByKey', () => {
    expect(sortByKey(friends, 'name')[0].name)
        .toBe('Amir')
    expect(sortByKey(friends, 'name')[1].name)
        .toBe('Beni')
    expect(sortByKey(friends, 'name')[2].name)
        .toBe('Cati')
    expect(sortByKey(friends, 'name')[3].name)
        .toBe('Dan')
    expect(sortByKey(friends, 'age')[0].name)
        .toBe('Cati')
    expect(sortByKey(friends, 'age')[1].name)
        .toBe('Beni')
    expect(sortByKey(friends, 'age')[2].name)
        .toBe('Amir')
    expect(sortByKey(friends, 'age')[3].name)
        .toBe('Dan')
})

it('imdbToMovie', () => {
    expect(imdbToMovie('tt0034754', movies).title)
        .toBe('Freckles Comes Home (1942)')
})

it('idToPoster', () => {
    expect(idToPoster('ScenesOfCityLife-dushifengguang'))
        .toBe('https://cdn.cinedantan.com/posters/png/ScenesOfCityLife-dushifengguang.png')
})



