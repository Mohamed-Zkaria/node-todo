const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        match: [
            /^([\w\.]*)(@)([\w\.]*)?(.com)$/,
            'Please fill a valid email address',
          ],
          unique: true,
          required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    todos: [{ type: Schema.Types.ObjectId, ref: 'Todo' }]
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;