const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const { User } = require("../models");
const validateToken = require("../middleware/auth");

router.get("/:id", validateToken, async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.params.id,
        },
    });

    res.json({
        user,
    });
});

router.post("/updatePassword", validateToken, async (req, res) => {
    const user = await User.findOne({
        where: {
            id: req.user.id,
        },
    });
    const { currentPassword, newPassword, confirmPassword } = req.body;

    bcrypt.compare(currentPassword, user.password).then((match) => {
        if (match) {
            User.update(
                {
                    password: bcrypt.hashSync(newPassword, 10),
                },
                {
                    where: {
                        id: user.id,
                    },
                }
            );
            res.json({
                header: "Success",
                body: "Password updated",
            });
        } else {
            res.json({
                header: "Error",
                body: "The current password is incorrect",
            });
        }
    });
});

module.exports = router;
