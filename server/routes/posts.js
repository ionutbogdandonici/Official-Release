const express = require("express");
const router = express.Router();
const { Post, User } = require("../models");
const validateToken = require("../middleware/auth");
const { verify } = require("jsonwebtoken");

router.post("/publish", validateToken, async (req, res) => {
    const { title, content } = req.body;

    const userId = verify(req.header("Access-Token"), "PAWM_JWT_SECRET").id;

    await Post.create({
        title,
        content,
        likes: 0,
        userId: userId,
    });
    res.json(userId);
});

const getUser = async (userId) => {
    User.findOne({
        where: {
            id: userId,
        }
    }).then(user => {
        return user.dataValues;
    });
}

router.get("/", validateToken, async (req, res) => {
    var listOfPosts = await Post.findAll();
    listOfPosts.forEach((post, index) => {
        Object.defineProperty(post.dataValues, "user", { value: getUser(post.userId) });
        console.log(post);
    });
    res.json(listOfPosts);
});

module.exports = router;
