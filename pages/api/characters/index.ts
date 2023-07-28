// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../../evo-task-data.json'
import { Character } from '../../../types/types'

type CharacterList = Character[]

    
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharacterList>
) {

  res.status(200).send(data)
}
