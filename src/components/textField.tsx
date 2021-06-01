import React, { ChangeEventHandler, useState } from 'react';

interface Props{
    text?: string
}

export const TextField: React.FC<Props> = (props) => {
    const [text, setText] = useState<string | undefined>('')

    const handleChange = (event: React.ChangeEvent, value: string) => {
        setText(value);
    }
    return(
        <input type='text' value={text} onChange={(event) => handleChange(event,event.target.value)}></input>
    )
}