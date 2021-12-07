export function getAllPeople() {
    return fetch('https://swapi.py4e.com/api/people/').then(res => res.json())
}

export function getPeopleByName(name) {
    return fetch(`https://swapi.py4e.com/api/people/?search=${name}`).then(res => res.json())
}

export function getPeopleById(id) {
    return fetch(`https://swapi.py4e.com/api/people/${id}`).then(res => res.json())
}

export function getPlanetBy(id) {
    return fetch(`https://swapi.py4e.com/api/planet/${id}`).then(res => res.json())
}

export function getByUrl(url) {
    return fetch(url).then(res => res.json())
}