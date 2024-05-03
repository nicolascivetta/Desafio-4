import mongoose from 'mongoose';

export const dbConnection = async () =>{
    try {
        await mongoose.connect('mongodb+srv://nicolascivetta2:holamanola2002@proyecto1.l4kuowt.mongodb.net/ecomerce');
        console.log('Base de datos online');
    } catch (error) {
        console.log('Error al levantar la base de datos');
        process.exit(1);
    }

}