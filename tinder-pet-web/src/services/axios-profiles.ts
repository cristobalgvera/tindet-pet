import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:8081/profiles`,
});

const get = async ( path: string ) => {
    try {
        return await instance.get(path);
    } catch (error) {
        throw new Error(error);
    }
};

const ProfilesFetch = {
    get: ( path: string ) => get(path),
};

export default ProfilesFetch;