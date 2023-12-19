import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../funciones"
import { Filtro } from "../filtro/Filtro"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const [movies, setMovies] = useState([])
    const decada = useParams ().decada

    useEffect(() => {
        getProducts()
            .then(response => {
                if (decada){
                    setMovies(response.filter((movie) => movie.decada === decada))
                }
                else {
                    setMovies(response)
                }
            })
            .catch(error => {
                console.error(error)
            })
    })


    return (
        <div>
            <Filtro />
            <div className="list-container" >
                <ItemList movies={movies} />
            </div>
        </div>

    )
}