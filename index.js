const express = require('express');
const ConnectDatabase = require('./database/db.js')
const app = express();
const cors = require('cors');
const router = require('./Router/Router');

app.use(express.json());
app.use(cors());
app.use('/', router);

ConnectDatabase()
    .then(() => {
        app.listen(3001, () => {
            console.log("server is started");
        })
    }).catch((err) => {
        console.log(err.message);
    })








