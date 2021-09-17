const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({ 
    name: String,
    price: Number,
    category: String
})

export const ItemModel = mongoose.model('Item', ItemSchema);