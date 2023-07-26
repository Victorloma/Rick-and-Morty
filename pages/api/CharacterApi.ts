// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../../evo-task-data.json'

type Character = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string,
}

type CharacterList = Character[]

    
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CharacterList>
) {

  res.status(200).send(data)
}
