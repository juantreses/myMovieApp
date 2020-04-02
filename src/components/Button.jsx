import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button onClick={props.moreMovies}>Show me more</button>
        </div>
    )
}
