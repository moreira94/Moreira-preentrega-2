import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'

export const ItemDetail = ({id, title, release_date, overview, vote_average, stock, poster_path, price} ) => {
  return (
    <div>
        <div className='card-detail'>
                    <h2>{title}</h2>
                    <div className='detail-img'>
                    <img className='card-img' src={"https://image.tmdb.org/t/p/w200"+poster_path} alt={title} />
                    </div>
                    <h4>
                        Sinopsis: {overview}
                    </h4>
                    <p>Año: {release_date?.slice(0,4) ?? "No disponible"}</p>
                    <p>Puntaje promedio: {vote_average?.toFixed(2) ?? "No disponible"}</p>
                    <p>Precio: US$ {price}</p>

                    <ItemCount inicial={1} total={stock} cantidad = {(cantidad) => console.log("cantidad agregada", cantidad)} />

                    </div>
    </div>
  )
}
