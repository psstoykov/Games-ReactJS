import { Router } from "express";
import { body, validationResult } from 'express-validator'
// import { login, register } from '../services/user.js'

const userRouter = Router();



userRouter.post(
    `/register`,
    body('name').trim().isLength({ min: 2, max: 20 }).withMessage('lenght must be between 2 and 20 characters'),
    body('email').trim().isEmail().isLength({ min: 10 }).withMessage('Please enter a valid email'),
    body('password').trim().isAlphanumeric().isLength({ min: 4 }).withMessage('Password must be at least 4 characters long and may contain only English letters and numbers'),
    body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage('Passwords don\'t match'),
    async (req, res) => {
        const body = req.body;


        console.log(req.body)
        res.json(body);
    }
)
export { userRouter }

