const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const db = require('./models');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

// Routing for authentication and registration
const authRouter = require('./routes/authUsers');
app.use("/auth", authRouter);
// Routing for users
const userRouter = require('./routes/users');
app.use("/user", userRouter);
// Routes for posts
const postRouter = require('./routes/posts');
app.use("/post", postRouter);
// Routing for the comments
const commentRouter = require('./routes/comments');
app.use("/comment", commentRouter);

db.sequelize.sync().then(() => {
    app.listen(3030, function () {
        console.log('Listening on port 3030!');
    });
});
