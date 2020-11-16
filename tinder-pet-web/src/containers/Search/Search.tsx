import React, { useEffect, useState } from 'react';
import axios from '../../services/axios-common';
import { Category } from './Interfaces/Category';
import { Breed } from './Interfaces/Breed';
import { Feature } from './Interfaces/Feature';
import Select from '../../components/UI/Form/Select/Select';
import Input from '../../components/UI/Form/Input/Input';
import Button from '../../components/UI/Form/Button/Button';
import { useHistory } from 'react-router-dom';

const categories = {
    breed: 'Raza',
    gender: 'Género',
    age: 'Edad',
    feature: 'Característica',
};

const genders = [
    { id: 1, name: 'Hembra' },
    { id: 2, name: 'Macho' },
];

const initialUserCategories: Category = {
    age: 0,
};

const Search = () => {
    const history = useHistory();

    const [userCategories, setUserCategories] = useState(initialUserCategories);
    const [breeds, setBreeds] = useState<Breed[]>([]);
    const [features, setFeatures] = useState<Feature[]>([]);

    useEffect(() => {
        axios.get(`/breeds`)
            .then(( { data: breeds } ) => {
                setBreeds(() => {
                    // @ts-ignore
                    return breeds.sort(( { name: n1 }, { name: n2 } ) => {
                        return n1 > n2 ? 1 : n1 < n2 ? -1 : 0;
                    });
                });
            })
            .catch(( { message } ) => console.log(message));

        axios.get(`/features`)
            .then(( { data: features } ) => {
                setFeatures(() => {
                    // @ts-ignore
                    return features.sort(( { name: n1 }, { name: n2 } ) => {
                        return n1 > n2 ? 1 : n1 < n2 ? -1 : 0;
                    });
                });
            })
            .catch(( { message } ) => console.log(message));
    }, []);

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const { target: { name: property, value } } = event;
        setUserCategories(prevState => ({ ...prevState, [property]: property === 'age' ? Number(value) : value }));
    };

    const handleSubmit = ( event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        event.preventDefault();
        history.push({
            pathname: `/search/result`,
            state: { userCategories: userCategories },
        });
    };

    return (
        <div>
            <h1>Buscador de pareja</h1>
            <form>
                <Input
                    name={'age'}
                    type={'number'}
                    label={categories.age}
                    placeholder={categories.age}
                    value={userCategories?.age}
                    min={0}
                    max={40}
                    handleChange={handleChange}
                />
                <p style={{ textAlign: 'right', fontSize: 'smaller' }}>0: No filtrar por edad.</p>
                <Select
                    label={categories.gender}
                    name={'gender'}
                    options={genders}
                    value={userCategories?.gender}
                    handleChange={handleChange}
                />
                <Select
                    name={'breed'}
                    label={categories.breed}
                    value={userCategories?.breed}
                    options={breeds}
                    handleChange={handleChange}
                />
                <Select
                    name={'feature'}
                    label={categories.feature}
                    value={userCategories?.feature}
                    options={features}
                    handleChange={handleChange}
                />
                <Button type={'Success'} clicked={handleSubmit}>
                    Buscar
                </Button>
                <Button type={'Danger'} clicked={() => history.push('')}>
                    Ir al inicio
                </Button>
            </form>
        </div>
    );
};

export default Search;
