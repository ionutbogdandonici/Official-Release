const express = require("express");
const validateToken = require("../middleware/auth");
const router = express.Router();
const { Post, Comment } = require("../models");

router.get("/get/:postId", validateToken, async (req, res) => {
    const postId = req.params.postId;
    const commentsOfThePost = await Comment.findAll({
        where: {
            postId,
        },
    });
    res.json(commentsOfThePost);
});

router.post("/add/:postId", validateToken, async (req, res) => {
    const comment = req.body.comment;
    Comment.create({
        text: comment,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        postId: req.params.postId,
    });
    res.json({
        header: "Success",
    });
});

module.exports = router;
