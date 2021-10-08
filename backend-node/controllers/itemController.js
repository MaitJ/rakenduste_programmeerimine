const {ItemModel} = require('../models/ItemModel');

exports.getItems = async (req, res) => {
    const items = await ItemModel.find({});

    res.status(200).send(items);
};

exports.createItem = async (req, res) => {
    const newItem = {
        name: req.body.name,
        quality: req.body.quality,
        unused: req.body.unused,
        color: req.body.color,
        updatedAt: Date.now()
    }

    const createdItem = new ItemModel(newItem);

    const savedItem = await createdItem.save();

    res.status(200).send("created item");
};

exports.updateItem = async (req, res) => {
    const { id } = req.params;
    const updatedItemModel = {
        name: req.body.name,
        quality: req.body.quality,
        unused: req.body.unused,
        color: req.body.color,
        updatedAt: Date.now()
    };

    const didUpdate = await ItemModel.findOneAndUpdate({_id: id}, updatedItemModel);

    res.status(200).send("Successfully updated item");
};

exports.deleteItem = async (req, res) => {
    const { id } = req.params;

    const item = await ItemModel.findOneAndDelete({ _id: id });

    console.log(item);
    res.status(200).send("sucessfully deleted item");
};