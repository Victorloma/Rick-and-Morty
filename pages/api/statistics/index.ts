import type { NextApiRequest, NextApiResponse } from 'next'
import { Statistics } from '../../../types/types'
import { top3Characters, mostAssignedStatus, popularHumanLocation, mostMales  } from '../../../stats/stats'

type Stats = Statistics

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Stats>
) {
    const statistics: Stats = {
        top3Characters,
        mostAssignedStatus,
        popularHumanLocation,
        mostMales,
    }

    res.status(200).send(statistics)
}
