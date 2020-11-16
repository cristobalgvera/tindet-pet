import React, { FunctionComponent } from 'react';
import { ProfileData } from '../../../containers/SearchResult/Interfaces/ProfileData';
import styles from './Profile.module.scss';
import P from './P/P';

type Props = {
    profile: ProfileData;
};

const Profile: FunctionComponent<Props> = (
    {
        profile: {
            name,
            breed: { name: breedName },
            gender,
            phrase,
            age,
            imageUri,
        },
    },
) => (
    <div className={styles.Profile}>
        <div className={styles.Image}>
            <img src={imageUri} alt={breedName}/>
        </div>
        <div className={styles.Description}>
            <P title={'Nombre'} emphasis={'strong'} value={name}/>
            <P title={'Raza'} emphasis={'strong'} value={breedName}/>
            <P title={'Género'} emphasis={'strong'} value={gender}/>
            <P title={'Edad'} emphasis={'strong'} value={age}/>
            <P title={phrase} emphasis={'i'}/>
        </div>
    </div>
);

export default Profile;