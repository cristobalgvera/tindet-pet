import { Breed } from '../../Search/Interfaces/Breed';
import { Feature } from '../../Search/Interfaces/Feature';

export interface ProfileData {
    id: number;
    name: string;
    gender: string;
    age: number;
    phrase?: string;
    imageUri?: string;
    breed: Breed;
    features?: Feature[];
}