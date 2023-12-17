import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({id, title, release_date, vote_average, poster_path, price, stock}) => {
    return (
        <div className='card' >
            <h2>{title}</h2>
            <img className='card-img' src={"https://image.tmdb.org/t/p/w200" + poster_path} alt="Imagen de la pelicula" />
            <p>Año: {release_date?.slice(0,4) ?? "No disponible"}</p>
            <p>Puntaje promedio: {vote_average?.toFixed(2) ?? "No disponible"}</p>
            <p>Precio: US$ {price}</p>
            <p>Cantidad disponible: {stock}</p>
            <br />
            <div className='btn-container'>
                <Link to={`/Item/${id}`} ><button className='btn-detail'>Ver mas</button></Link>
                {/* <ItemDetail {...movies} /> */}
            </div>
        </div>

    )
}
