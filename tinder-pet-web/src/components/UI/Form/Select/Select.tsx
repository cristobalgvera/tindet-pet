import React, { FunctionComponent } from 'react';
import styles from './Select.module.scss';

interface OwnProps {
    label: string;
    name: string;
    value: string | number | undefined
    options: any[];

    handleChange( event: React.ChangeEvent<HTMLSelectElement> ): void;
}

type Props = OwnProps;

const Select: FunctionComponent<Props> = ( { name, label, options, value, handleChange } ) => (
    <div className={styles.Select}>
        <label htmlFor={name}>{label}</label>
        <select
            name={name}
            onChange={handleChange}
            value={value}
            defaultValue={'default'}
        >
            <option value={'default'} disabled>Selecciona una</option>
            {options.map(( { id, name } ) => <option key={id} value={name}>{name}</option>)}
        </select>
    </div>
);

export default Select;
