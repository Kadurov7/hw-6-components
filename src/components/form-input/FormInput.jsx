  import "./FormInput.css";
  import styled from "styled-components";

 const FormDivInput = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-bottom: 10px;
    width: 400px;

 `
  const FormInput = ({id, labelName, placeholder, inputType, ...rest})=>{
    console.log(rest);
    return(
        <FormDivInput>
        <label htmlFor={id}>{labelName}</label>
  
      <Input placeholder= {placeholder || "..."} 
        id={id}
         type={inputType} {...rest}/>
      
        </FormDivInput>
        
    );
};  
export default FormInput;

const Input = styled.input`
    height: 30px;
    width: 25vw;
    border-radius: 10px;
    border: none;
`