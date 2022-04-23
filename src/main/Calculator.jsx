import React, { useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import './Calculator.css'
import { whichOperation } from "./CalculatorHelp";

export default()=>{
    const [displayValue,setDisplayValue] = useState('')
    const [firstNumber,setFirstNumber] = useState('')
    const [secondNumber,setSecondNumber] = useState('')
    const [inOperation,setInOperation] = useState(false)
    const [currentOperator,setCurrentOperator] = useState('')
    
    function clearMemory(){
        setDisplayValue('')
        setFirstNumber('')
        setSecondNumber('')
        setInOperation(false)
    }
    function selectOperation(operation){
        setInOperation(true)
        setDisplayValue('')
        if(operation != '='){
            setCurrentOperator(operation)
        }else{
            const result = whichOperation(currentOperator,firstNumber,secondNumber)
            setDisplayValue(result)
        }
        

        
    }
    function addDigit(digito){
        if (digito === '.' && displayValue.includes('.')){
            return
        }else{
             if(inOperation === false){
                 const numero = displayValue.concat(digito)
                 setDisplayValue(numero)
                 setFirstNumber(numero)
             }else{
                setDisplayValue('')
                const numero = displayValue.concat(digito)
                setDisplayValue(numero)
                setSecondNumber(numero)
             }
      
        }
    }
    return(
        <div className="calculator">
            <Display content={displayValue} />
            <Button label='AC' onClick={clearMemory} triple/>
            <Button label='/' onClick={selectOperation} operation/>
            <Button label='7' onClick={addDigit}/>
            <Button label='8' onClick={addDigit}/>
            <Button label='9' onClick={addDigit}/>
            <Button label='*' onClick={selectOperation} operation/>
            <Button label='4' onClick={addDigit}/>
            <Button label='5' onClick={addDigit}/>
            <Button label='6' onClick={addDigit}/>
            <Button label='-' onClick={selectOperation} operation/>
            <Button label='1' onClick={addDigit}/>
            <Button label='2' onClick={addDigit}/>
            <Button label='3' onClick={addDigit}/>
            <Button label='+' onClick={selectOperation} operation/>
            <Button label='0' onClick={addDigit} double />
            <Button label='.' onClick={addDigit} />
            <Button label='=' onClick={selectOperation} operation/>
        </div>
    )
}