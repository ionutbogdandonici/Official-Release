const { verify } = require("jsonwebtoken");

const validateToken = (req, res, next) => {
    // Get auth header value
    const accessToken = req.header("Access-Token");

    // Check if token exists
    if (!accessToken) {
        return res.json("User not logged in");
    }

    // Verify token
    try {
        const validToken = verify(accessToken, "PAWM_JWT_SECRET");
        if (validToken) {
            next();
        }
    } catch (err) {
        return res.json("Token is not valid");
    }
};

module.exports =  validateToken ;
