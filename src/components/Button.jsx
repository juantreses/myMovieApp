import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button onClick={props.moreMovies}>Next 10 movies</button>
        </div>
    )
}
