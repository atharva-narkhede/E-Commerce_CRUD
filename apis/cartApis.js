
const Cart = require('../model/Cart');

// Fetch all cart items
const fetch_carts = async (req, res) => {
    try {
        const carts = await Cart.find();
        console.log('Data sent');
        res.json(carts);
    } catch (error) {
        console.log('Fetch error :- ', error);
        res.json({ 'message': error });
    }
};

// Insert a cart item
const insert_cart_item = async (req, res) => {
    const cartItem = new Cart({
        p_id: req.body.p_id,
        p_name:req.body.p_name,
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        u_name: req.body.u_name,
        quantity: req.body.quantity
    });
    try {
        const savedCartItem = await cartItem.save();
        console.log('Cart item inserted');
        res.send(savedCartItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update a cart item
const update_cart_item = async (req, res) => {
    const { p_id, u_name, quantity } = req.body;
    const cartUpdate = {
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        u_name,
        quantity
    };
    try {
        const updatedCartItem = await Cart.updateOne({ p_id, u_name }, cartUpdate);
        if (updatedCartItem.modifiedCount != 0) {
            console.log('Cart item Updated', updatedCartItem);
            res.send({ 'update': 'success' });
        } else {
            console.log('Cart item not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a cart item
const delete_cart_item = async (req, res) => {
    const { p_id, u_name } = req.body;
    try {
        const deletedCartItem = await Cart.deleteOne({ p_id, u_name });
        if (deletedCartItem.deletedCount != 0) {
            console.log('Cart item Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('Cart item Not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    fetch_carts,
    insert_cart_item,
    update_cart_item,
    delete_cart_item
};
