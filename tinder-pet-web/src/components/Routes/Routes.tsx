import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home/Home';
import Search from '../../containers/Search/Search';
import SearchResult from '../../containers/SearchResult/SearchResult';
import styles from './Routes.module.scss';

const Routes = () => (
    <div className={styles.Routes}>
        <Switch>
            <Route path={'/search/result'} component={SearchResult} exact/>
            <Route path={'/search'} component={Search}/>
            <Route path={'/profiles'} component={SearchResult}/>
            <Route path={'/'} component={Home} exact/>
            <Redirect to={'/'}/>
        </Switch>
    </div>
);

export default Routes;
