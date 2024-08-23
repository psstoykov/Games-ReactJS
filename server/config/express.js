import cors from 'cors'
import { urlencoded } from 'express';
// import { static: staticHandler } from 'express';
import cookieParser from 'cookie-parser';
// const { session } = require('../middlewares/session');

const secret = 'what a secret';

export default function configExpress(app) {
    app.use(cors());
    app.use(cookieParser(secret));
    // app.use(session());
    app.use(urlencoded({ extended: true }));
    // app.use('/static', staticHandler('static'));
}

