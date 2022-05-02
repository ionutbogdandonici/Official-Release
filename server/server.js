const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const db = require('./models');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

const authRouter = require('./routes/authUsers');
app.use("/auth", authRouter);

db.sequelize.sync().then(() => {
    app.listen(3030, function () {
        console.log('Listening on port 3030!');
    });
});