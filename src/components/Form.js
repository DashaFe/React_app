import React, { useState } from 'react';
import './Form.css';
import Calculation from '../logic/calculation';

const Form = (props) => {

    let list=['V', 'm','M','T']; //список переменных, которые задает пользователь
    let res='P'; //переменная, которую нужно найти
    let result; //числовой ответ

    //создание ref'ов
    let textInput1=React.createRef();
    let textInput2=React.createRef();
    let textInput3=React.createRef();
    let textInput4=React.createRef();

    //задание state'ов, для того чтобы доставать значения из текствовых полей
    const [text1, setText1] = useState(null);
    const [text2, setText2] = useState(null);
    const [text3, setText3] = useState(null);
    const [text4, setText4] = useState(null);
    const [text5, setText5] = useState(0);
    
    //обработка изменения значения текстового поля
    const change=()=>
    {
        setText1(textInput1.current.value);
        setText2(textInput2.current.value);
        setText3(textInput3.current.value);
        setText4(textInput4.current.value);
    }

    //обрабтка клика на кнопку
    const clickk =(event)=>{
        result = Calculation(res,text1, text2, text3,text4);
        setText5(result);
    };

    //проверка на то, какую перменную хочет найти пользователь
    for(var i=0; i<list.length;i++)
    {
        if(props.val===list[i])
        {
            res=list[i];
            list[i]='P';
        }
    }

    return(
        <div>
            <div>
            <div className='left'>
                <label className='head'>Ведите значения переменных:</label>
                <p className='var'>
                    <label>
                    {list[0]}=
                    <input type='number' min={0} defaultValue={0} ref={textInput1} onChange={change}/>
                    </label>
                    <label></label>
                </p>
                <p className='var'>
                    <label>
                    {list[1]}=
                    <input type='number' min={0} defaultValue={0} ref={textInput2} onChange={change}/>
                    </label>
                </p>
                <p className='var'>
                    <label>
                    {list[2]}=
                    <input type='number' min={0} defaultValue={0} ref={textInput3} onChange={change}/>
                    </label>
                </p>
                <p className='var'>
                    <label>
                    {list[3]}=
                    <input type='number' min={0} defaultValue={0} ref={textInput4} onChange={change}/>
                    </label>
                </p>
                <p className='var'>
                    <label>R=<label className='R'>8,31 Дж/моль*К</label>
                    </label>
                </p>
            </div>
            <div className='right'>
                <label className='head'>Результат</label>
                <p className='res'><label className='res'>{res}={text5}</label></p>
                
            </div></div>
            <div className='but'>
                <button type='submit' onClick={clickk}>Рассчитать</button>
            </div>
        </div>
    )
}

export default Form;