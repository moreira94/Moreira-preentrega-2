import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../funciones"

export const ItemListContainer = () => {

    const [movies, setMovies] =useState([])

    useEffect(() => {
        getProducts () 
        .then(response => {
            setMovies(response)
        })
        .catch (error => {
            console.error(error)
        })
    })


    return (
        
            <div className="list-container" >
            <ItemList movies={movies}  />
            </div>


    )
}