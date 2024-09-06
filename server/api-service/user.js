import { Router } from "express";
import { body, validationResult } from 'express-validator'
import { login, register } from '../services/user.js'
import { createToken } from "../services/token.js";


const userRouter = Router();



userRouter.post(
    `/register`,
    body('name').trim().isLength({ min: 2, max: 20 }).withMessage('lenght must be between 2 and 20 characters'),
    body('email').trim().isEmail().isLength({ min: 10 }).withMessage('Please enter a valid email'),
    body('password').trim().isAlphanumeric().isLength({ min: 4 }).withMessage('Password must be at least 4 characters long and may contain only English letters and numbers'),
    body('repass').trim().custom((value, { req }) => value == req.body.password).withMessage('Passwords don\'t match'),
    async (req, res) => {
        const body = req.body;

        const { name, email, password } = body;

        try {

            const result = validationResult(req)
            if (result.errors.length) {
                res.json(result.errors)
                throw result.errors
            }

            const user = await register(name, email, password);

            const token = createToken(user)
            res.cookie('token', token, { httpOnly: true })

            res.json(user);
        } catch (err) {
            res.json(err.errors)
        }
    }
);


userRouter.post(
    '/login',
    body('email').trim(),
    body('password').trim(),
    async (req, res) => {
        const { email, password } = req.body;
        try {
            if (!email || !password) {
                throw 'All fields are required'

            }
            const user = await login(email, password);
            const token = createToken(user)
            res.cookie('token', token, { httpOnly: true })
            user.token = token
            res.json(user)
        } catch (err) {
            res.json(err.toString())
        }
    }
)
export { userRouter }

