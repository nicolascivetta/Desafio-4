import {Schema, model} from 'mongoose';

const nameCollection = 'Producto';

const productoSchema = new Schema({

    title: { type: String, required: [true, 'El title del producto es obligatorio']  }, 
    description: { type: String, required: [true, 'La descripcion del producto es obligatorio']  },
    code: { type: String, required: [true, 'El code del producto es obligatorio'], unique: true  },
    price: { type: String, required: [true, 'El price del producto es obligatorio']  },
    status: { type: Boolean, default: true},
    stock: { type: Number, required: [true, 'El title del producto es obligatorio']  },
    category: { type: String, required: [true, 'El title del producto es obligatorio']  },
    thumbnail: [{ type: String}],

});

export const productModel = model(nameCollection, productoSchema);