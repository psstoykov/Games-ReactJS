import { Schema, SchemaTypes: Types, model } from 'mongoose';

const GameSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    studios: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    released: {
        type: String,
        required: true
    },
    recommendedList: {
        type: [Types.ObjectId],
        ref: 'user'
    },
    owner: {
        type: Types.ObjectId,
        ref: 'user'
    },
});

const Game = model('Recipe', GameSchema);

export { Recipe };