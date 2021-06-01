import React, { useState } from 'react';

interface Props{
    text?: string
}
export const TextField: React.FC<Props> = (props) => {
    const [text, setText] = useState<string | undefined>('')

    return(
        <input type='text'></input>
    )
}