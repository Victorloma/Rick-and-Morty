import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

type CharacterCardProps = {
  id: number,
  name: string,
}

const CharacterCard: React.FC = ({id, name}) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="An image of a Rick and Morty character" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />}
  >
    <Meta title="Rick and Morty characters" description="" />
  </Card>
)

export default CharacterCard