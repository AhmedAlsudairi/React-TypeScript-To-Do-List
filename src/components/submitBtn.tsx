import React, { ChangeEventHandler, useState } from 'react';

interface Props{
    handleClick: () => void
}

export const SubmitBtn: React.FC<Props> = (props) => {

    const handleClick = (event: React.MouseEvent) => {
        props.handleClick()
    }
    
    return(
        <button onClick={(event)=>{handleClick(event)}}>submit</button>
    )
}