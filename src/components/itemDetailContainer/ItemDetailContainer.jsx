import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { ItemDetail } from '../itemDetail/ItemDetail'
import { getProductById } from '../../funciones'
import { useParams } from 'react-router-dom'

export const ItemDetailContainer = () => {

    const [movies, setMovies ] = useState(null)
    const id= useParams().id;
    console.log(id)

    useEffect(() => {
        getProductById(Number(id))
        .then (response => {
            setMovies(response)
        })
        .catch (error => {
            console.error(error)
        })
    }, [id])

  return (   
    <div className='itemDetailContainer'>
        <ItemDetail {...movies} />

    </div>
  )
}
