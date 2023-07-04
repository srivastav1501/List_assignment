import './style.css'
import React from 'react'

const Card = ({selected}) => {
    return (
        <div className='card'>
          <h1 className='head'>Card</h1>
            
            <div className='card-content'>
                <h1>{selected.Name}</h1>
                <span className='price'>Price: Rs. {selected.Price}</span>
                <span className='id'>Item Id: {selected.id}</span>
            </div>
        </div>
    )
}

export default Card
