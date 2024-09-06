import jwt from 'jsonwebtoken'


const secret = 'jwt secret';

function createToken(user) {
    const payload = {
        _id: user._id,
        email: user.email
    };

    const token = jwt.sign(payload, secret, { expiresIn: '2d' });

    return token;
}

function verifyToken(token) {
    const payload = jwt.verify(token, secret);
    return payload;
}

export {
    createToken,
    verifyToken
};