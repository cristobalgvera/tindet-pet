import React, { FunctionComponent } from 'react';
import styles from './Input.module.scss';

interface OwnProps {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    min?: number;
    max?: number;
    value: string | number | undefined;

    handleChange( event: React.ChangeEvent<HTMLInputElement> ): void;
}

type Props = OwnProps;

const Input: FunctionComponent<Props> =
    ( {
          label,
          name,
          type,
          value,
          placeholder,
          min,
          max,
          handleChange,
      } ) => (
        <div className={styles.Input}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                min={min}
                max={max}
                onChange={handleChange}
            />
        </div>
    );

export default Input;
