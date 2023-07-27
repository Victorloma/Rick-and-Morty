import React from "react"
import useSWR from "swr"
import CharacterCard from "./CharacterCard"
import { Character } from "../types/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const CardList = () => {
  const { data, error } = useSWR<Character[]>('/api/CharacterApi', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  if (data.length === 0) return <div>No characters</div>
  
  return (
    <div>
      {
        data?.map(character => {
          return <CharacterCard key={character.id} character={character} />
        })
      }      
    </div>
  )
}

export default CardList
