import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Home.module.scss';

const Home = () => {
    const history = useHistory();
    const [hidden, setHidden] = useState(true);

    const handleClick = () => {
        history.push('/search');
    };

    return (
        <div>
            <p className={styles.Button}
               onMouseOver={() => setHidden(false)}
               onMouseOut={() => setHidden(true)}
               onClick={handleClick}
            >
                Presiona para buscar a tu pareja canina
            </p>
            <p hidden={hidden}>A sólo un click del amor ❤️</p>
        </div>
    );
};

export default Home;