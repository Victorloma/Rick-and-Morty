// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../evo-task-data.json'
import { Character, Statistics } from '../../../types/types'

type CharacterList = Character[]

type stats = Statistics

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<stats>
) {
    // top 3 characters with most episodes
    const top3Characters: CharacterList = data.sort((a, b) => b.episode.length - a.episode.length).slice(0, 3)
    
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
    
    const mostAssignedStatus = Math.max(alive, dead, unknown) === alive ? 'Alive' :
        Math.max(alive, dead, unknown) === dead ? 'Dead' : 'Unknown'

    
    // most popular human location
    const humans: CharacterList = data.filter(character => character.species === 'Human')

    const humansPerLocation = humans.reduce((acc: any, curr: any) => {
            acc[curr.location.name] === undefined ? acc[curr.location.name] = 1 : acc[curr.location.name]++
            
            return acc
        }, {})

    const popularHumanLocation = Object.entries(humansPerLocation).sort((a: any, b: any) => b[1] - a[1])[0][0]


    // species with most males
    const males: CharacterList = data.filter(character => character.gender === 'Male')

    const malesPerSpecies = males.reduce((acc: any, curr: any) => {
            acc[curr.species] === undefined ? acc[curr.species] = 1 : acc[curr.species]++
            
            return acc
        }, {})

    const mostMales = Object.entries(malesPerSpecies).sort((a: [string, any], b: [string, any]) => b[1] - a[1])[0][0]
    
    
    const statistics: stats = {
        top3Characters,
        mostAssignedStatus,
        popularHumanLocation,
        mostMales,
    }

    res.status(200).send(statistics)
}
