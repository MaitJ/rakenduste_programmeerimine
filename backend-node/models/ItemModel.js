const {Schema, model }= require("mongoose");

const ItemSchema = Schema({ 
    name: { type: String, required: true, },
    quality: { type: Number, required: true },
    unused: { type: Boolean, default: true },
    color: { type: String, enum: ['red', 'green', 'blue'], default: 'green'},
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date }
})

exports.ItemModel = model('Item', ItemSchema);