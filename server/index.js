const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');

const knexConfig = require('./database/knexfile');
const knex = require('knex')(knexConfig["development"]);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("200 OK");
});

app.get('/merchant/:id', (req, res) => {
    const id = req.params.id;

    if (!id || id == "null") {
        return res.json("");
    }

    knex('merchants')
        .select('merchant_id')
        .where('id', id)
        .then(data => {
            return res.json(data);
        })
        .catch(error => {
            return res.json("");
        })
})

app.listen(port, () => {
    console.log(`Express server ready. Listening on port: ${port}`);
});