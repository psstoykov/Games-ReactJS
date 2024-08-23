import express from 'express'

import { body, validationResult } from 'express-validator'
import configDatabase from './config/database.js'
import configExpress from './config/express.js';
import configRoutes from './config/routes.js';

const PORT = process.env.PORT || 3000;

async function start() {
    const app = express();

    await configDatabase();
    configExpress(app);
    configRoutes(app);



    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });

};

start();