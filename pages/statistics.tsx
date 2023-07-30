import React from 'react'
import useSWR from 'swr'
import { Character, Statistics } from '../types/types'
import { List, Typography, Spin, Result } from 'antd'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'

type character = Character

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const statistics = () => {
    const { data, error } = useSWR<Statistics>('/api/statistics', fetcher)
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
                    renderItem={(item: character, i: number) => (
                    <List.Item>
                        <CharacterCard key={item.id} character={item} rank={i} />
                    </List.Item>
                    )}
                />

                <table>
                    <tr>
                        <th>Most common status</th>
                        <td>{data.mostAssignedStatus}</td>
                    </tr>
                    <tr>
                        <th>Favorite location for humans</th>
                        <td>{data.popularHumanLocation}</td>
                    </tr>
                    <tr>
                        <th>Species with most males</th>
                        <td>{data.mostMales}</td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default statistics
