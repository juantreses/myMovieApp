import React from 'react';

export default function Movies(props) {
    return(
        <ul className="grid">
            {
                props.data.map(movie=><li key={movie.imdbID}>{movie.Title}</li>)
            }
        </ul>
    )
}