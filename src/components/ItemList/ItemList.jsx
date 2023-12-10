import React, { useEffect, useState } from 'react'

function ItemList() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=040607781015504b3ffce61d8075c1e2")
            .then((resp) => resp.json())
            .then((data) => {
                setMovies(data.results)

            })
    }, [])



    console.log(movies)


    return (
        <div className="container">
            {
            movies.length > 0 &&
            movies.map((movie) => {
                return (
                    <div className='card'>
                    <h2>{movie.title}</h2>
                    <img className='card-img' src={"https://image.tmdb.org/t/p/w200"+movie.poster_path} alt="" />
                    <p>Año: {movie.release_date.slice(0,4)}</p>
                    <p>Puntaje promedio: {movie.vote_average.toFixed(2)}</p>
                    <br />
                    <div className='btn-container'>
                    <button className='btn-detail'>Ver mas</button>
                    </div>
                    </div>

                )
            })}

        </div>
    )
}

export default ItemList