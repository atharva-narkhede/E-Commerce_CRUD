const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
        p_id: Number,
        p_img: String,
        p_cost: Number,
        u_name: String,
        quantity: Number
})

module.exports = mongoose.model("Cart", cartSchema)
