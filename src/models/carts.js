import {Schema, model} from 'mongoose';

const nameCollection = 'Cart';

const cartSchema = new Schema({
    products:[
        {
            _id:false,
            id:{
                type:Schema.Types.ObjectId,
                ref: 'Producto'
            },
            quantity:{
                type:Number,
                required: [true, 'La cantidad del producto es obligatoria']
            }
        }
    ]

});

export const cartModel = model(nameCollection, cartSchema);