import React, { useState } from 'react';
import './App.css';
import { TextField } from './components/textField';
import { SubmitBtn } from './components/submitBtn';
function App() {
  const [items, setItems] = useState<string []>([])
  const [text, setText] = useState<string>('')

  const handleChange = (value: string) => {
    console.log(value);
    
      setText(value);
  }

  const submitItem = () => {
    setText('');
    setItems([...items, text]);
}
  return (
    <div className="App">
      <br></br>
      <h1>To Do List</h1>
      <TextField text={text} handleChange={(text)=>{handleChange(text)}}/>
      <br></br>
      <SubmitBtn handleClick={submitItem}/>
      <br></br>
      <div>
        {items.map((item,index)=>
          <h6 key={index}>{item}</h6>
        )}
      </div>
    </div>
  );
}

export default App;
