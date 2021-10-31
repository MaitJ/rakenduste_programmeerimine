const {Schema, model} = require('mongoose');

const PostSchema = Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    data: { type: String, required: true},
    createdAt: { type: Date, default: Date.now()},
    updatedAt: { type: Date }
})

exports.PostModel = model("Post", PostSchema);