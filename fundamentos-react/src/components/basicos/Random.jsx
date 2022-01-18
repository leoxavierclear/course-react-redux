import React from 'react'



export default (props) => {
    let min = props.min;
    let max = props.max;
    let number = parseInt(Math.random() * (max - min)) + min;
    
    return(
        <>
            <h2>Valor Aleatório</h2>
            <p> <strong>O NÚMERO MÍNIMO É: </strong> { min} </p>
            <p> <strong>O NÚMERO MÁXIMO É: </strong>  { max} </p>
            <p> <strong>O NÚMERO ALEATÓRIO É: </strong>{ number }</p>
           
        </>

    )
}

