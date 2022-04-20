const express = require('express');
const db = require('./models');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const userRouter = require('./routes/users');
app.use("/auth", userRouter);

db.sequelize.sync().then(() => {
    app.listen(3030, function () {
        console.log('Ascoltando sulla porta 3030');
    });
});