import { List, Result, Spin } from 'antd'
import React, { useState } from 'react'
import useSWR from 'swr'
import { Character } from '../types/types'
import CharacterCard from './CharacterCard'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const App: React.FC = () => {
    const { data, error } = useSWR<Character[]>('/api/characters', fetcher)

    if (error) return (
        <>
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
        <Spin size='large' tip='loading' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
           <div className="content" />
        </Spin> 
    )   
    if (data.length === 0) return <div>No characters</div>
    
    return (
        <>
            <List
                pagination={{ position: 'bottom', align: 'center', defaultPageSize: 25, pageSizeOptions: [10, 25, 50, 100]}}
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
                style={{ padding: '4rem' }}
                renderItem={(item) => (
                <List.Item>
                    <CharacterCard key={item.id} character={item} />
                </List.Item>
                )}
            />
        </>
    )
}

export default App