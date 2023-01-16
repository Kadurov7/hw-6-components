 import {Button} from "../UI/button/Button"
 import { ExpenseForm } from "../expense-form/ExpenseForm"
 import "./Newexpense.css";
 import { useState } from "react";
 import styled from "styled-components";

 const NewExpenseDiv = styled.div`
    background-color: #AD9BE9;
    border: 2px solid;
    border: none;
    border-radius: 18px;
    padding: 20px;
 `

export const NewExpense = ({onNewExpenseAdd})=>{

    const [showForm, setShowForm ] = useState(false)//1
     

    const showExpenseForm = ()=>{
         setShowForm((prevState)=> {
            return !prevState;
        })
        
    };
    

    console.log("RENDER");
    return(
        <NewExpenseDiv>
        { showForm ? (<ExpenseForm
         onShowForm={showExpenseForm} 
        onNewExpenseAdd={onNewExpenseAdd}
        />
        ) : (
        <Button title="Добавить новый расход" onClick={showExpenseForm} />)}
        </NewExpenseDiv>
    )
 }