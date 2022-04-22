import React, { useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display";
import './Calculator.css'

export default()=>{
    const [displayValue,setDisplayValue] = useState('')
    
    function clearMemory(){
        setDisplayValue('')
    }
    function selectOperation(operation){
        console.log(operation)
    }
    function addDigit(digito){
        if (digito === '.' && displayValue.includes('.')){
            return
        }
        setDisplayValue(displayValue.concat(digito))        
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