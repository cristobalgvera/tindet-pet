import React, { FunctionComponent } from 'react';

interface OwnProps {
    title: string | undefined;
    value?: string | number | undefined;
    emphasis: string;
}

type Props = OwnProps;

const P: FunctionComponent<Props> = ( { title, value, emphasis } ) => {
    const titleEmphasis = () => {
        switch (emphasis) {
            case 'strong':
                return <strong>{title}</strong>;
            case 'i':
                return <i>{title}</i>;
            default:
                return <strong>{title}</strong>;
        }
    };

    return <p>{titleEmphasis()}{value && ': ' + value}</p>;

};

export default P;
