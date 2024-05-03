import {Schema, model} from 'mongoose';

const nameCollection = 'Message';

const messageSchema = new Schema({
    user:{type:String, required:[true, 'EL nombre del usuario es obligatorio']},
    message:{type:String, required:[true, 'EL mensaje es obligatorio']}

});

export const messageModel = model(nameCollection, messageSchema);