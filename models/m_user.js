const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true }, // Le rôle doit être obligatoire
    token: { type: String }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
