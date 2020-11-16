import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
    <div className={styles.Header}>
        <NavLink to={'/'} activeClassName={styles.active} exact>Home</NavLink>
        <NavLink to={'/search'} activeClassName={styles.active}>Buscar</NavLink>
        <NavLink to={'/profiles'} activeClassName={styles.active}>Perfiles</NavLink>
    </div>
);

export default Header;
