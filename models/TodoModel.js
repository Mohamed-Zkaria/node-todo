const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    body: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 250
    },
    status: {
        type: String,
        enum: ['todo', 'inprogress', 'done']
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});

const TodoModel = mongoose.model('Todo', TodoSchema);

module.exports = TodoModel;