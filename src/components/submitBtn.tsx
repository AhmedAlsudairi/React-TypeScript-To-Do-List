import React, { ChangeEventHandler, useState } from 'react';
import {Button} from '@chakra-ui/react'
interface Props{
    handleClick: () => void
}


export const SubmitBtn: React.FC<Props> = (props) => {

    const handleClick = (event: React.MouseEvent) => {
        props.handleClick()
    }
    
    return(
        <Button onClick={(event)=>{handleClick(event)}} colorScheme="blue" >Add Item</Button>
    )
}