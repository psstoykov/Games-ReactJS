import bcrypt from 'bcrypt'
import { User } from '../models/User.js'

async function register(name, email, password) {

    const existing = await User.findOne({ email });

    if (existing) {
        const err = new Error('Email is already used');
        err.errors = { email: 'Email is already used' };
        throw err;
    }
    //TODO check if current program has username or not
    const user = new User({
        name,
        email,
        password: await bcrypt.hash(password, 10)
    });

    await user.save();

    return user;
}

async function login(email, password) {

    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Incorrect email or password');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Incorrect email or password');
    }

    return user;
}

export {
    register,
    login
};