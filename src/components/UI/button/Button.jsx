
import React from 'react'
import "./Button.css";
import styled from 'styled-components';

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`
const ButtonDivB = styled.button`
    font-size: 16px;
    width: 250px;
    height: 50px;
    border: none;
    background-color: #4A026B;
    color: white;
    padding: 10px 20px;
    border-radius: 12px;
    &&:hover{
    background-color: rgb(26, 3, 48);
    }
`
export const Button = (props) => {
  return (
    <ButtonDiv>
          <ButtonDivB onClick={props.onClick}>{props.title}</ButtonDivB>
    </ButtonDiv>
  
  )
}
