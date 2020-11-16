import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:8081`,
});

const get = async ( path: string ) => {
    try {
        return await instance.get(path);
    } catch (error) {
        throw new Error(error);
    }
};

const CommonFetch = {
    get: ( path: string ) => get(path),
};

export default CommonFetch;