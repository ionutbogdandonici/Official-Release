const express = require("express");
const router = express.Router();
const { User } = require("../models");

router.get("/:id", async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id,
        },
    });

    res.json({
        imageProfile: user.imageProfile,
    });
})

module.exports = router;