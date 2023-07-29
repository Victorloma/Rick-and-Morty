import React from 'react'
import useSWR from 'swr'
import { Character, Statistics } from '../types/types'
import { List, Typography } from 'antd'
import CharacterCard from '../components/CharacterCard'
import Header from '../components/Header'

type character = Character
type stats = Statistics

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const statistics = () => {
    const { data, error } = useSWR('/api/statistics', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            <Header />
            <div className='stats'>
                <Typography.Title level={1}>Statistics</Typography.Title>
                <Typography.Title level={3}>Top 3 most occuring Characters</Typography.Title>
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
                    <Typography.Title level={4}>Most characters in the show currently a status of:</Typography.Title>
                    <Typography.Text strong>{data.mostAssignedStatus}</Typography.Text>
                </div>
                <div>
                    <Typography.Title level={4}>Favorite location for humans:</Typography.Title>
                    <Typography.Text strong>{data.popularHumanLocation}</Typography.Text>
                </div>
                <div>
                    <Typography.Title level={4}>Species with most males:</Typography.Title>
                    <Typography.Text strong>{data.mostMales}</Typography.Text>
                </div>     
            </div>
        </>
    )
}

export default statistics
