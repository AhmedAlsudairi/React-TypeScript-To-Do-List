import React, { useState } from 'react';
import './App.css';
import { TextField } from './components/textField';
import { SubmitBtn } from './components/submitBtn';
import { Item } from './components/item';
import {Stack, Heading, Box, Container, Text} from '@chakra-ui/react'
function App() {
  const [items, setItems] = useState<string []>([])
  const [text, setText] = useState<string>('')

  const handleChange = (value: string) => {
    console.log(value);
    
      setText(value);
  }

  const submitItem = () => {
    setText('');
    if(text !== '')
    setItems([...items, text]);
}

const removeItem = (id: number) => {
  console.log(id);
  const newItems: string[] = items.filter((item,index)=> index !== id);

  setItems([...newItems]);
}
  return (
    <Container bg='gray.100' maxW="xl" centerContent>
  <Box padding="4" bg="gray.100" maxW="3xl">
  <Stack spacing={3}>
      <Heading>To Do List</Heading>

      <TextField text={text} handleChange={(text)=>{handleChange(text)}}/>
      
      <SubmitBtn handleClick={submitItem}/>

      {items.length > 0 ? <Text color="gray.500" isTruncated>Click on an item to remove it</Text> : null}

        {items.map((item,index)=>
          <Item handleClick={()=>removeItem(index)} key={index} id={index}>{item}</Item>
        )}

      </Stack>
  </Box>
</Container>

    
  );
}

export default App;
