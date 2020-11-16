import React, { FunctionComponent } from 'react';
import { ProfileData } from '../../containers/SearchResult/Interfaces/ProfileData';
import Profile from './Profile/Profile';
import styles from './Profiles.module.scss';

interface OwnProps {
    profiles: ProfileData[] | undefined;
}

type Props = OwnProps;

const Profiles: FunctionComponent<Props> = ( { profiles } ) => {
    const profilesList = () => profiles?.map(
        profile => <Profile key={profile.id} profile={profile}/>,
    );

    return (
        <div className={styles.Profiles}>
            {profilesList()}
        </div>
    );
};

export default Profiles;
