import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../services/axios-profiles';
import { ProfileData } from './Interfaces/ProfileData';
import { Category } from '../Search/Interfaces/Category';
import Profiles from '../../components/Profiles/Profiles';
import Spinner from '../../components/UI/Spinner/Spinner';
import Home from '../Home/Home';

const SearchResult = () => {
    const [profiles, setProfiles] = useState<ProfileData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { state } = useLocation();

    useEffect(() => {
        axios.get('')
            .then(( { data: profiles } ) => {
                if (state) {
                    // @ts-ignore
                    filterProfiles(profiles, state.userCategories);
                } else setProfiles(profiles);
            })
            .catch(( { message } ) => {
                console.log(message);
                setError(true);
            })
            .finally(() => setLoading(false));
    }, [state]);

    const filterProfiles = ( profiles: ProfileData[], { age, breed, feature, gender }: Category ) => {
        const filteredProfiles = profiles.filter(profile => {
            const { features, gender: profileGender, age: profileAge, breed: { name: profileBreed } } = profile;
            if (age && profileAge !== age) return false;
            if (breed && profileBreed !== breed) return false;
            if (gender && profileGender !== gender) return false;
            if (feature && !features?.map(value => value.name).includes(feature)) return false;
            return true;
        });

        setProfiles(filteredProfiles);
    };

    const profilesHelper = () => {
        if (error)
            return (
                <>
                    <p>Ha habido un error en la obtención de datos, vuelve a intentarlo</p>
                    <Home/>
                </>
            );

        if (profiles?.length === 0)
            return (
                <>
                    <p>No existen parejas como la que buscas, pero puedes seguir intentándolo</p>
                    <Home/>
                </>
            );
        else return <Profiles profiles={profiles}/>;

    };

    return (
        <div>
            <h1>Perfiles para ti</h1>
            {loading ? <Spinner/> : profilesHelper()}
        </div>
    );
};

export default SearchResult;
