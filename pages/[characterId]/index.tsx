import React from 'react'
import { useRouter } from 'next/router'
import { Character } from '../../types/types'
import useSWR from 'swr'
import { Image, Typography } from 'antd'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const characterDetails = () => {

  const router = useRouter()
  const characterId = router.query.characterId

  const { data, error } = useSWR<Character>(`/api/characters/${characterId}`, fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className='character-details'>
      <Typography.Title level={2}>Character Details</Typography.Title>
      <Typography.Title level={4}>{data.name}</Typography.Title>
      <Image src={data.image} alt={`Picture of ${data.name}`} />
      <p>{data.species}</p>
      <p>{data.created.slice(0, 10)}</p>
      <p>{data.status}</p>
      <p>{data.gender}</p>
      <p>{data.location.name}</p>
      <p>Amount of episodes: {data.episode.length}</p>
    </div>
  )
}

export default characterDetails
