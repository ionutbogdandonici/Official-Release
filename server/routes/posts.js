const express = require("express");
const router = express.Router();
const { Post, Comment } = require("../models");
const validateToken = require("../middleware/auth");
const { verify } = require("jsonwebtoken");

router.post("/publish", validateToken, async (req, res) => {
    const { title, content } = req.body;

    await Post.create({
        title,
        content,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        userId: req.user.id,
    });

    return res.json({
        header: "Success",
        body: {
            userId: req.user.id,
        },
    });
});

router.get("/", validateToken, async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
});

router.get("/:postId", validateToken, async (req, res) => {
    const postId = req.params.postId;
    const post = await Post.findOne({
        where: {
            id: postId,
        },
    });
    res.json(post);
});

module.exports = router;
