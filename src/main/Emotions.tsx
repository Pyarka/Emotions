import React, { ReactElement, useState } from 'react';
import InputField from './InputField/InputField';
import { Main } from './EmotionsStyles';

const Emotions = (): ReactElement => {
    const [text, setText] = useState('');
    const height = window.screen.height;
    const width = window.screen.width;
    console.log(height);
    return (
        <Main width={width} height={height}>
            <div>{text}</div>
            <InputField
                value={text}
                onBlur={(value) => setText(value)}
                onChange={(value) => setText(value)}
            />
        </Main>
    );
};

export default Emotions;