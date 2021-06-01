import React, { ChangeEventHandler, useState } from 'react';
import { Button } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
interface Props {
    // text: string,
    handleClick: (index: number) => void,
    id: number
}

export const Item: React.FC<Props> = (props) => {

    return (
        <Box bg="red.600" w="100%" p={3} color="white" borderRadius='md' onClick={()=>props.handleClick(props.id)} >
            {props.children}
        </Box>
    )
}