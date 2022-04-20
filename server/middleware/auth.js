const {verify} = require('jsonwebtoken');

const validateToken = (req, res, next ) => {
    const accessToken = req.header('accessToken');
}