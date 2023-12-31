import rawData from '../evo-task-data.json'
import { Character, CharacterStatus, Gender } from '../types/types'

const data = rawData as Character[]

// top 3 characters with most episodes
export const top3Characters: Character[] = data.sort((a, b) => b.episode.length - a.episode.length).slice(0, 3)


// most assigned status
const { alive, dead, unknown } = data.reduce(
(acc, curr) => { 
    switch (curr.status) {
        case CharacterStatus.Alive:
            acc.alive++
            break
        case CharacterStatus.Dead:
            acc.dead++
            break
        default:
            acc.unknown++
    }
    return acc
    }, {
        alive: 0, dead: 0, unknown: 0
})

const max = Math.max(alive, dead, unknown)

export const mostAssignedStatus = max === alive ? CharacterStatus.Alive :
    max === dead ? CharacterStatus.Dead : CharacterStatus.Unknown


// most popular human location
const humans: Character[] = data.filter(character => character.species === 'Human')

const humansPerLocation = humans.reduce((acc: any, curr: Character) => {
        acc[curr.location.name] === undefined ? acc[curr.location.name] = 1 : acc[curr.location.name]++
        
        return acc
    }, {})

export const popularHumanLocation = Object.entries(humansPerLocation).sort((a: [string, any], b: [string, any]) => b[1] - a[1])[0][0]


// species with most males
const males: Character[] = data.filter(character => character.gender === Gender.Male)

const malesPerSpecies = males.reduce((acc: any, curr: Character) => {
        acc[curr.species] === undefined ? acc[curr.species] = 1 : acc[curr.species]++
        
        return acc
    }, {})

export const mostMales = Object.entries(malesPerSpecies).sort((a: [string, any], b: [string, any]) => b[1] - a[1])[0][0]