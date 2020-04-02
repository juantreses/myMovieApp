import React from 'react'
import Name from './Name'

export default function Person({data}) {
    return (
        <div>
            <Name name={data.name}/>
            <p>My age is {data.age}</p>
            <p>My hobby is {data.hobby}</p>
        </div>
    )
}

