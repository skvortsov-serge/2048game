import React from 'react';

import css from './Test.module.scss';

interface AppProps {
    headerText: string;
    extraText?: string;
}

const Test = ({ headerText, extraText }: AppProps) => {
    return (
        <div className={css.container}>
            <h1>Hello, This is test Component TS</h1>
            <p>{headerText}</p>
            {extraText && <p>{extraText}</p>}
        </div>
    );
};

export default Test;
