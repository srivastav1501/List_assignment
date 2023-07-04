import './style.css';
import Data from '../db/database';
import React, { useState, useEffect } from 'react';

const List = ({ selected, setSelected }) => {
    const [isActive, setIsActive] = useState(false);
    console.log(selected)

    useEffect(()=>{
        const def = Data.find((e)=> e.id === 3)
        setSelected(def)
    },[])
    return (
        <div className='dropdown' onClick={() => setIsActive(!isActive)}>
            <div className='dropdown-btn'>Choose one</div>

            {isActive && (
                <div className='dropdown-content'>
                    {Data.map((item, i) => {
                        return (
                            <div key={i} onClick={()=>setSelected(item)} className='dropdown-item'>
                                {item.Name}
                            </div>
                        )

                    })}

                </div>
            )}
        </div >
    )
}

export default List
