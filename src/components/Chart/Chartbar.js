import React from 'react'
import "./ChartBar.css";
import styled from 'styled-components';

const Containars = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
`
const ContainarInner = styled.div`
    height: 100%;
    width: 100%;
    border: 1px solid black;
    border-radius: 12px;
    background-color: #A892EE;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

`
const ContainarFill = styled.div`
    background-color: #4826B9;
    width: 100%;
    transition: all 1s ease-out;
`
const ContainarLabel= styled.p`
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
    font-size: 9px;
`
const Chartbar = ({maximumPrice, currentPrice, label }) => {

    const fillHeight = (100 * currentPrice) / maximumPrice
  return (
    <Containars>
        <ContainarInner>
        <ContainarFill style={{height: `${fillHeight}%`}}>
          </ContainarFill> 
        </ContainarInner>
            <ContainarLabel>{label}</ContainarLabel>
        
    </Containars>
  )
}

export default Chartbar