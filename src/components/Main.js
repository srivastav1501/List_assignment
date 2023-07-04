import './style.css'
import React, { useState } from 'react';
import List from './List';
import Card from './Card';

const Main = () => {
    const [selected, setSelected] = useState("");
  return (
    <div className='container'>
      <List selected={selected} setSelected={setSelected}/>
      <Card selected={selected}/>
    </div>
  )
}

export default Main
