import React, { FunctionComponent } from 'react';
import styles from './Button.module.scss';

interface OwnProps {
    type: string;

    clicked( event: React.MouseEvent<HTMLButtonElement> ): void;
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = ( { type, clicked, children } ) => (
    <button className={[styles.Button, styles[type]].join(' ')} onClick={clicked}>
        {children}
    </button>
);

export default Button;
