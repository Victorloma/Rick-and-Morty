import React, { use } from 'react'
import { Card } from 'antd'
import { Character } from '../types/types'
import Link from 'next/link'

type Props = {
  key: number,
  character: Character,
  rank?: number,
}
const { Meta } = Card

const CharacterCard: React.FC<Props> = ({ character, rank }) => {
  const title = typeof rank === 'number' && rank >= 0 ? `${rank+1}. ${character.name}` : character.name

  return (
    <Link href={`/${character.id}`} className='card'>
      <Card
        hoverable
        style={{ margin: "auto", width: 320, backgroundColor: '#9eebcf', borderColor: 'gray'}}
        cover={<img alt="An image of a Rick and Morty character" src={character.image} />}
      >
        <Meta title={title} description={character.status} />
      </Card>
    </Link>
  )
}

export default CharacterCard