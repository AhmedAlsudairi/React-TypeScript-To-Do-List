import React from 'react';
import { Input } from "@chakra-ui/react"

interface Props{
    text?: string,
    handleChange: (text: string) => void
}

export const TextField: React.FC<Props> = (props) => {

    return(

    <Input placeholder="Basic usage" value={props.text} onChange={(event) => props.handleChange(event.target.value)} size="lg"/>
        
    )
}