import React from 'react'
import useSWR from 'swr'
import { Character, Statistics } from '../types/types'

type character = Character
type stats = Statistics

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const statistics = () => {
    const { data, error } = useSWR('/api/statistics', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            {data.top3Characters.map((char: character) => <p key={char.id}>{`${char.name}`}</p>)}
            <p>{data.mostAssignedStatus}</p>
            <p>{data.popularHumanLocation}</p>
            <p>{data.mostMales}</p>
        </div>
    )
}

export default statistics
