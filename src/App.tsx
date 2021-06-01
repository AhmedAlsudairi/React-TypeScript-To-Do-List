import React, { useState } from 'react';
import './App.css';
import { TextField } from './components/textField';
import { SubmitBtn } from './components/submitBtn';
import { Item } from './components/item';
import {Stack, Heading, Box, Container} from '@chakra-ui/react'
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

const removeItem = (id: number) => {
  console.log(id);
  setItems([...items, text]);
}
  return (
    <Container maxW="xl" centerContent>
  <Box padding="4" bg="gray.100" maxW="3xl">
  <Stack spacing={3}>
      <Heading>To Do List</Heading>

      <TextField text={text} handleChange={(text)=>{handleChange(text)}}/>
      
      <SubmitBtn handleClick={submitItem}/>
      
      
        {items.map((item,index)=>
          <Item handleClick={()=>removeItem(index)} key={index} id={index}>{item}</Item>
        )}

      </Stack>
  </Box>
</Container>

    
  );
}

export default App;
