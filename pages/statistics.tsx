import React from 'react'
import useSWR from 'swr'
import { Character, Statistics } from '../types/types'
import { List, Typography, Spin, Result } from 'antd'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'

type character = Character
type stats = Statistics

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const statistics = () => {
    const { data, error } = useSWR('/api/statistics', fetcher)
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
            <div className="stats">
                <h1 className='Chewy'>Statistics</h1>
                <Spin size='large' tip='loading' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
                    <div className="content" />
                </Spin> 
            </div>
            
        </>
    )

    return (
        <>
            <Header />
            <div className='stats'>
                <h1 className='Chewy'>Statistics</h1>
                <Typography.Title level={2} style={{ color: 'white', marginTop: '0rem' }}>Top 3 most occuring Characters</Typography.Title>
                <List
                    dataSource={data.top3Characters}
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 2,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    renderItem={(item: character) => (
                    <List.Item>
                        <CharacterCard key={item.id} character={item} />
                    </List.Item>
                    )}
                />
                <div>
                    <Typography.Title level={4} style={{ color: 'white', marginBottom: '0rem' }}>Most characters in the show currently a status of:</Typography.Title>
                    <Typography.Text strong italic style={{ color: 'white', marginTop: '0rem' }}>{data.mostAssignedStatus}</Typography.Text>
                </div>
                <div>
                    <Typography.Title level={4} style={{ color: 'white', marginBottom: '0rem' }}>Favorite location for humans:</Typography.Title>
                    <Typography.Text strong italic style={{ color: 'white', marginTop: '0rem' }}>{data.popularHumanLocation}</Typography.Text>
                </div>
                <div>
                    <Typography.Title level={4} style={{ color: 'white', marginBottom: '0rem' }}>Species with most males:</Typography.Title>
                    <Typography.Text strong italic style={{ color: 'white', marginTop: '0rem' }}>{data.mostMales}</Typography.Text>
                </div>     
            </div>
        </>
    )
}

export default statistics
