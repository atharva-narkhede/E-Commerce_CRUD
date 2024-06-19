const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    u_name: String,
    u_pwd: String,
    u_email: String,
    u_addr: String,
    u_contact: Number,
    token: String

})

module.exports = mongoose.model("User", userSchema)
