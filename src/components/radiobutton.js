import React from 'react';
import './RadioButton.css';
import Form from './Form'

const RadioButton = () => {

    const[value, setValue]=React.useState('P');

    const handleChange = (event) => {
        setValue(event.target.value);
      };
    
    return (
        <div className='radbut'>
        <input type="radio" value='P'  checked={value==='P' ? true : false} onChange={handleChange}/><label>P</label>      
        <input type="radio" value='V' checked={value==='V' ? true : false}  onChange={handleChange} /><label>V</label>
        <input type="radio" value='m' checked={value==='m' ? true : false} onChange={handleChange} /><label>m</label>
        <input type="radio" value='M' checked={value==='M' ? true : false} onChange={handleChange} /><label>M</label>
        <input type="radio" value='T' checked={value==='T' ? true : false} onChange={handleChange} /><label>T</label>
        <div><span>{value}</span></div>
        <Form val={value} />
        </div>
    );
  };

  export default RadioButton;