const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { auth } = require("../middleware/auth");
const nodemailer = require("nodemailer");

router.post("/register", async (req, res) => {
    if (
        await User.findOne({
            where: { email: req.body.email },
        })
    ) {
        return res.status(400).json({
            message: "User already exists",
        });
    } else {
        bcrypt.hash(req.body.password, 10).then((hash) => {
            User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                imageProfile: null,
                email: req.body.email,
                password: hash,
                isAdmin: 1,
                isAbled: 1,
            });
        });
        return res.status(200).json({
            message: "User registered",
        });
    }
});

router.post("/login", async (req, res) => {
    // Memorizzo i dati ricevuti dal client
    const { password } = req.body;
    // Cerco l'utente nel database
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    });
    // Se non esiste
    if (!user) {
        return res.json({
            error: "Utente non esistente",
        });
    } else {
        bcrypt.compare(password, user.password).then((match) => {
            if (!match) {
                return res.status(400).json({
                    error: "Password errata",
                });
            } else {
                // Creo il token di autenticazione
                const accessToken = sign({ id: user.id, email: user.email }, "PAWM_JWT_SECRET");
                // Restituisco il token al client
                res.status(200).json({
                    accessToken: accessToken,
                    user: {
                        id: user.id,
                        email: user.email,
                    },
                    success: true,
                });
            }
        });
    }
});

router.post("/forgotPassword", async (req, res) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        },
    });
    if (!user) {
        return res.json({
            error: "Utente non esistente",
        });
    } else {
        const newPassword = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        bcrypt.hash(newPassword, 10).then((hash) => {
            User.update(
                {
                    password: hash,
                },
                {
                    where: {
                        email: req.body.email,
                    },
                }
            ).then(() => {
                const transporter = nodemailer.createTransport({
                    service: "outlook",
                    auth: {
                        user: "bogdan.donici@outlook.it",
                        pass: "D3v3l0p3r@13",
                    },
                });
                const mailOptions = {
                    from: "bogdan.donici@outlook.it",
                    to: user.email,
                    subject: "Password recovery",
                    text: "Your new password is: \n\n" + newPassword,
                };
                transporter.sendMail(mailOptions, (error, info) =>{
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
            });
        })

       
    }
});

module.exports = router;
