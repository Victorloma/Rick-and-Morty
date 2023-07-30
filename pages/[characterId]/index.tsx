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

  const date = new Date(data.created).toLocaleDateString()

  return (
    <>
      <Header />
      <div className='character-details'>
        <h1 className='Chewy'>Character Details</h1>
        <Typography.Title level={2} style={{ color: 'white' }}>{data.name}</Typography.Title>
        <Image style={{ borderRadius: '0.5rem' }} src={data.image} alt={`Picture of ${data.name}`} />
        <table>
            <tr>
                <th>Species</th>
                <td>{data.species}</td>
            </tr>
            <tr>
                <th>Created at</th>
                <td>{date}</td>
            </tr>
            <tr>
                <th>Status</th>
                <td>{data.status}</td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>{data.gender}</td>
            </tr>
            <tr>
                  <th>Location</th>
                  <td>{data.location.name}</td>
            </tr>
            <tr>
                  <th>Number of episodes</th>
                  <td>{data.episode.length}</td>
            </tr>
        </table>
      </div>
    </>
  )
}

export default characterDetails
