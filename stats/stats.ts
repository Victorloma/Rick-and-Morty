import data from '../evo-task-data.json'
import { Character } from '../types/types'

// top 3 characters with most episodes
export const top3Characters: Character[] = data.sort((a, b) => b.episode.length - a.episode.length).slice(0, 3)


// most assigned status
const { alive, dead, unknown } = data.reduce(
(acc, curr) => { 
    switch (curr.status) {
        case 'Alive':
            acc.alive++
            break
        case 'Dead':
            acc.dead++
            break
        default:
            acc.unknown++
    }
    return acc
    }, {
        alive: 0, dead: 0, unknown: 0
})

export const mostAssignedStatus = Math.max(alive, dead, unknown) === alive ? 'Alive' :
    Math.max(alive, dead, unknown) === dead ? 'Dead' : 'Unknown'


// most popular human location
const humans: Character[] = data.filter(character => character.species === 'Human')

const humansPerLocation = humans.reduce((acc: any, curr: any) => {
        acc[curr.location.name] === undefined ? acc[curr.location.name] = 1 : acc[curr.location.name]++
        
        return acc
    }, {})

export const popularHumanLocation = Object.entries(humansPerLocation).sort((a: [string, any], b: [string, any]) => b[1] - a[1])[0][0]


// species with most males
const males: Character[] = data.filter(character => character.gender === 'Male')

const malesPerSpecies = males.reduce((acc: any, curr: any) => {
        acc[curr.species] === undefined ? acc[curr.species] = 1 : acc[curr.species]++
        
        return acc
    }, {})

export const mostMales = Object.entries(malesPerSpecies).sort((a: [string, any], b: [string, any]) => b[1] - a[1])[0][0]