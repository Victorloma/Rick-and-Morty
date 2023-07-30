// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../evo-task-data.json'
import { Character } from '../../../types/types'

type CharacterDetails = Character | undefined

    
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharacterDetails>
) {
    const characterData = data.find(character => character.id === Number(req.query.characterId))
    characterData ? res.status(200).send(characterData as CharacterDetails) :
    res.status(404).send(undefined)
}
