import React from 'react'
import { useRouter } from 'next/router'
import { Character } from '../../types/types'
import useSWR from 'swr'
import { Image, Typography, Spin, Result } from 'antd'
import Header from '../../components/Header'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const characterDetails = () => {

  const router = useRouter()
  const characterId = router.query.characterId

  const { data, error } = useSWR<Character>(`/api/characters/${characterId}`, fetcher)

  if (error) return (
    <>
      <Header />
      <div className="failed">
        <div className="failed-block">
          <Result
            status="warning"
            title="There are some problems with your operation."
          />
        </div>
      </div>
    </>
  )
  if (!data) return (
      <>
        <Header />
        <div className="character-details">
          <h1 className='Chewy'>Character Details</h1>
          <Spin size='large' tip='loading' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <div className="content" />
          </Spin>
        </div>
      </>
  )
  return (
    <>
      <Header />
      <div className='character-details'>
        <h1 className='Chewy'>Character Details</h1>
        <Typography.Title level={2} style={{ color: 'white' }}>{data.name}</Typography.Title>
        <Image style={{ borderRadius: '0.5rem'}} src={data.image} alt={`Picture of ${data.name}`} />
        <div className='character-detail'>
            <p><span>Species: </span>{data.species}</p>
        </div>
        <div className='character-detail'>
          <p><span>Created at: </span>{data.created.slice(8, 10)}-{data.created.slice(5, 7)}-{data.created.slice(0, 4)}</p>
        </div>
        <div className='character-detail'>
            <p><span>Status: </span>{data.status}</p>
        </div>
        <div className='character-detail'>
            <p><span>Gender: </span>{data.gender}</p>
        </div>
        <div className='character-detail'>
            <p><span>Location: </span>{data.location.name}</p>
        </div>
        <div className='character-detail'>
            <p><span>Amount of episodes: </span>{data.episode.length}</p>
        </div>
      </div>
    </>
  )
}

export default characterDetails
