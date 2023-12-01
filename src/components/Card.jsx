import React from 'react'
import './Card.css'

const Card = ({data}) => {
  const {author,designation,message}=data
    return (
    <div className='c-container'>
        <div className='author'>
            <h3>{author}</h3>
            <span>{designation}</span>
        </div>
        <div className='message'>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default Card