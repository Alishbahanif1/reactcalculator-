
import { useState } from "react";
import React from 'react';
import Button from "./Button";
import TextBox from "./TextBox"
import "./App.css"
function App() {
 
  const[memoryVal,setMemoryVal]=useState([])
  const[inputValue,setInputValue]=useState('')

  function handleButtonClick (event) {
   
    setInputValue(prevValue => prevValue + event);
    if (event == "%") {
      
  const number = parseFloat(inputValue);
    if (!isNaN(number)) {
        setInputValue((number / 100)); 
    } }
  if(event== "="){
    let result=eval(inputValue);
    setInputValue(result);

  }
  setMemoryVal(inputValue);

  };
  console.log(memoryVal);
  
  function clear()
  {
    
    setInputValue('');
   
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Calculator</h1>
      
   <div className="col-6 mx-auto bg mt-5">
   
   <div><TextBox value={memoryVal} />
   </div>
   <div><TextBox value={inputValue} />
   </div>   
   <div>
   <Button val="7" onClick={handleButtonClick} className={"btn"}/>
   <Button val="8" onClick={handleButtonClick}className={"btn"}/>
   <Button val="9" onClick={handleButtonClick}className={"btn"}/>
   <Button val="+" onClick={handleButtonClick}className={"btn"}/>
   </div>
   <div>
   <Button val="4" onClick={handleButtonClick}className={"btn"}/>
   <Button val="5" onClick={handleButtonClick}className={"btn"}/>
   <Button val="6" onClick={handleButtonClick}className={"btn"}/>
   <Button val="-" onClick={handleButtonClick}className={"btn"}/>
   </div>
   <div>
   <Button val="1" onClick={handleButtonClick}className={"btn"}/>
   <Button val="2" onClick={handleButtonClick}className={"btn"}/>
   <Button val="3" onClick={handleButtonClick}className={"btn"}/>
   <Button val="*" onClick={handleButtonClick}className={"btn"}/>
   </div>
   <div>
   <Button val="0" onClick={handleButtonClick}className={"btn"}/>
   <Button val="%" onClick={handleButtonClick}className={"btn"}/>
   <Button val="CE" onClick={clear}className={"btn2 btn"}/>
   <Button val="/" onClick={handleButtonClick}className={"btn"}/>

   </div>
   <div><Button val="=" onClick={handleButtonClick}className={"btn1"}/></div>
   </div>
   </div>
 );
}
export default App;
