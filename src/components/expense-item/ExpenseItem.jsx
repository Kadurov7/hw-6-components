import "./ExpenseItem.css";
import styled from "styled-components";
// import { useState } from "react";


export const ExpenseItem = (props)=>{

    const { date, title, price }= props;
    return (
        <ExpenseDivitem>
            <ExpenseDivitemList>
            <p>{date.toString()}</p>
            </ExpenseDivitemList>
            <ExpenseDivItemList2>
            <h4>{title}</h4>
            <ExpenseParag>{`$ ${price}`}</ExpenseParag>
            </ExpenseDivItemList2>
        </ExpenseDivitem>
    )
};

const ExpenseDivitem = styled.div`
    border:1px solid;
    border-radius: 12px;
    border: none;
    padding: 5px;
    background-color: #615d5d;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 20px;

` 
const  ExpenseDivitemList = styled.div`
    margin: 8px;
    border: 1px solid;
    width: 120px;
    height: 110px;
    text-align: center;
    border-radius: 10px;
    background-color:#0a0909;
`
const ExpenseDivItemList2 =styled.div`
    display: flex;
    gap:25rem;
    align-items: center;
    justify-content: center;
`
const ExpenseParag = styled.p`
     margin-right: 5rem;
    border: 1px solid violet;
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 10px;
    border: none;
    background-color:#40005D;
`