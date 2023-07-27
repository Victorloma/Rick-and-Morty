import { List, Space, Spin } from 'antd'
import React, { useState } from 'react'
import useSWR from 'swr'
import { Character } from '../types/types'
import CharacterCard from './CharacterCard'



const fetcher = (url: string) => fetch(url).then((res) => res.json())

type PaginationPosition = 'top' | 'bottom' | 'both'

type PaginationAlign = 'start' | 'center' | 'end'

type DefaultPageSize = 25

const positionOptions = ['top', 'bottom', 'both']

const alignOptions = ['start', 'center', 'end']

const defaultPageSize: DefaultPageSize = 25

const App: React.FC = () => {
    const [position, setPosition] = useState<PaginationPosition>('bottom')
    const [align, setAlign] = useState<PaginationAlign>('center')

    const { data, error } = useSWR<Character[]>('/api/CharacterApi', fetcher)

    if (error) return <div>Failed to load</div>
    if (!data) return (
        <Space size="middle">
            <Spin size="large" />
        </Space>
    )   
    if (data.length === 0) return <div>No characters</div>
    
    return (
        <>
            <List
                pagination={{ position, align, defaultPageSize}}
                dataSource={data}
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 4,
                    xxl: 5,
                }}
                renderItem={(item) => (
                <List.Item>
                    <CharacterCard key={item.id} character={item} />
                </List.Item>
                )}
            />
        </>
    );
};

export default App;