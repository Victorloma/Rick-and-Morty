import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const statistics = () => {
    const { data, error } = useSWR('/api/statistics', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log(data)
    return (
        <div>
            statistics
        </div>
    )
}

export default statistics
