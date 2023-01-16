import React from 'react'
import Chartbar from './Chartbar'
import "./Chart.css";
import styled from "styled-components";

const Container = styled.div`
 
    padding: 1rem;
    border-radius: 12px;
    background-color:blueviolet;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem   ;
    &&:hover{
        background-color: aqua;
    }
`


const Chart = ({expenses}) => {

  const  maximumPrice = 2000;

    const months =[
        {
            label:"Январь",
            currentPrice:0,
        },
        {
            label:"Февраль",
            currentPrice:0,
        },
        {
            label:"Март",
            currentPrice:0,
        },
        {
            label:"Апрель",
            currentPrice:0,
        },
        {
            label:"Май",
            currentPrice:0,
        },
        {
            label:"Июнь",
            currentPrice:0,
        },
        {
            label:"Июль",
            currentPrice:0,
        },
        {
            label:"Август",
            currentPrice:0,
        },
        {
            label:"Сентябрь",
            currentPrice:0,
        },
        {
            label:"Октябрь",
            currentPrice:0,
        },
        {
            label:"Ноябрь",
            currentPrice:0,
        },
        {
            label:"Декабрь",
            currentPrice:0,
        },
    ]


   expenses.forEach(items => {
     const monthNumber = new Date(items.date).getMonth()
     months[monthNumber].currentPrice += items.price 
   });
  return (
    <Container>
        {months.map((item)=>{
     return(
        
        <Chartbar 
        key={item.label} 
        label={item.label}
        currentPrice={item.currentPrice}
        maximumPrice={maximumPrice}/> 
          
     )
        })}
        
    </Container>
  )
}

export default Chart