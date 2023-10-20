import { ObjectId } from 'mongodb';
import { db } from "../connectDb.js";
const animalDb = db.collection('animal');

const theAnimal = {
    type: 'dog',
    breed: 'molosses',
    color: 'Black'
}

export async function addAnimal() {

    const animalAdded = await db.collection('Animal').find({}).toArray();
    console.log('animalAdded ->', animalAdded) 
 }
    export async function getAllAnimals(){
        const AnimalList = await db.collection('animals').find({}).toArray();
        console.table(AnimalList);
    }





