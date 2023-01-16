 import { ExpenseItem } from "../expense-item/ExpenseItem"
 import "./Expensis.css";
 import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
 import { useState } from "react";
 import Chart from "../Chart/Chart";
 import styled from "styled-components";
 
 const Ullist = styled.ul`
    padding: 20px;
    border: 2px solid;
    border-radius: 13px;
    background-color: #181414;

 `

 export const Expenses=({expenses})=>{

  const [selectedYear, setSelectedYear] = useState("2022")

  const yearChangeHandler=(event)=>{
   setSelectedYear(event.target.value)
  }


  const filteredItems = expenses.filter((ele)=>{
      const stringifiedYear = new Date(ele.date).getFullYear().toString()
      return stringifiedYear === selectedYear;
  })
  console.log(filteredItems);

  return(
    <Ullist>

      <ExpenseFilter value={selectedYear} onChange={yearChangeHandler}/>

      <Chart expenses={filteredItems}/>
      {filteredItems.map((elem)=>{
        return (
          
        <ExpenseItem title={elem.title} 
        price={elem.price} 
        date={elem.date}/>
        )
      })}
    </Ullist>
  );
 }