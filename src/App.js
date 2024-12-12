
// function App() {
 
//    const [txtval, setTxtVal] =useState('')
//    function handlekeyup(event){
//     setTxtVal(event.target.value)
//    }
//    return (
//     <>
//     <input type="text" value={txtval} onChange={handlekeyup}/>
//     <p>{txtval}</p>
//    </>
//   );
// }

// function App() {
 
//   const [btnval, setbtnVal] =useState(0)
//   function btnclick(event){
    
//    setbtnVal(btnval+1)
//   }
//   return (
//    <>
//    <input type="button" value="Counter" onClick={btnclick}/>
//    <p>{btnval}</p>
//   </>
//  );
// }

// function App() {
 
//   const [btnval, setbtnVal] =useState('')
//   function table(event){
//     let val1=event.target.value
    
//     let tableOutput=''
//   for(let i=1;i<=10;i++){
//     //1*i=1
//     tableOutput+= val1 +"*"+ i +"="+ i*val1+ "\n"
//   }
//   setbtnVal(tableOutput)
// }
//   return (
//    <>
//    <input type="number"  onChange={table}/>
//    <pre>{btnval}</pre>
//   </>
//  );
// }
// export default App;
// function App() {
 
//   const [btnval, setbtnVal] =useState(0);
//   const tableOutput=[];

//   function table(event){
//     setbtnVal(event.target.value)

//   }
//   for(let i=1;i<=10;i++){
//     //1*i=1
//     tableOutput.push(<p> {btnval} * {i} = {i*btnval} </p>)
//   }

//   return (
//    <>
//    <input type="number" value={btnval}  onChange={table}/>
//    <div>{tableOutput}</div>
//   </>
//  );
// }
// export default App;
// function App() {
 
//   const [friends] =useState(["Hina","Nimra","Qasim","Kalim","tahira","Laiba","Sohail"]);

//   return (
//    <>
//    <h1>Members</h1>
//    <ul>
//     {
// friends.map((item)=>{
//   return <li>{item}</li>
// })
//     }
//    </ul>
   
//    </>
//  );
// }
// // export default App;
// function App() {
 
//   const [friends] =useState(["Hina","Nimra","Qasim","Kalim","tahira","Laiba","Sohail"]);

//   return (
//    <>
//    <h1>Members</h1>
//    <ul>
//     {
// friends.map((item)=>{
//   return <li>{item}</li>
// })
//     }
//    </ul>
   
//    </>
//  );
// }
// export default App;
// export default App;
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