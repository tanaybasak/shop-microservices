const firebase = require("../firebase");

function authMiddleware(request, response, next) {
    const headerToken = request.headers.authorization;
    if (!headerToken) {
        return response.send({ message: 'No Token was provided' }).status(401);
    }

    if (headerToken && headerToken.split(' ')[0] !== 'Bearer') {
        response.send({ message: 'Invalid Token' }).status(401);
    }

    const token = headerToken.split(" ")[1];
    firebase
        .auth()
        .verifyIdToken(token)
        .then(() => {
            console.log('verified');
            next();
        })
        .catch(() => response.send({ message: "Could not authorize" }).status(403));

}

module.exports = authMiddleware;
