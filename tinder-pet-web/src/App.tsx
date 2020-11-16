import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/UI/Header/Header';
import Routes from './components/Routes/Routes';

const App = () => (
    <BrowserRouter>
        <Header/>
        <Routes/>
    </BrowserRouter>
);

export default App;
