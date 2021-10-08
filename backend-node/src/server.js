const express = require('express');
const mongoose = require('mongoose');
const itemRoutes = require('../routes/itemRoute');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded());


//Always should be the last
app.use('/api/item', itemRoutes);
app.get('/', (req, res) => {
    res.send("Hello world!");
})

app.post('/additem', (req, res) => {
    res.json(req.body);
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