import React from 'react'
import "./style/header.css"

const Movie = (props) => {
  return (
    <div className='movie'>
        <img src={props.poster} alt='error loading'/>
        <p>{props.title}</p>
        <p>Year: {props.year}</p>
      
    </div>
  )
}

export default Movie
