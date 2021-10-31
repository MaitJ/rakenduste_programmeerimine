const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('../routes/itemRoute');
const authRoutes = require('../routes/authRoutes');
const postRoutes = require('../routes/postRoutes');
const cors = require('cors');

const jwtAuth = require('../middleware/jwtAuth');
require('dotenv').config()

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());


app.use('/api/item', itemRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

app.get('/', jwtAuth,  (req, res) => {
    res.send("Hello world!");
})

app.post('/additem', (req, res) => {
    res.json(req.body);
})

app.get('*', (req, res) => {
    res.send("This route doesnt exist");
})


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => {
        console.log("Listening on: ", PORT);
    })
})
.catch((err) => {
    console.log(err);
    process.exit(1);
})