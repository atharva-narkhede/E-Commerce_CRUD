// const Cart = require('../model/Cart');

// const cart_all = async (req, res) => {
//     try {
//         console.log('cart data sent')
//         const carts = await Cart.find();
//         res.json(carts);
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching cart items: ' + error.message });
//     }
// };


// const add_to_cart = async (req, res) => {
//     const { p_id, p_img, p_cost, u_name, quantity } = req.body;
//     const cartItem = new Cart({
//         p_id,
//         p_img,
//         p_cost,
//         u_name,
//         quantity
//     });

//     try {
//         const newCartItem = await cartItem.save();
//         res.status(201).json(newCartItem);
//     } catch (error) {
//         res.status(400).json({ message: 'Error adding item to cart: ' + error.message });
//     }
// };


// const update_cart_item = async (req, res) => {
//     const { id } = req.params;
//     const { quantity } = req.body;

//     try {
//         const updatedCartItem = await Cart.findByIdAndUpdate(id, { quantity }, { new: true });
//         if (!updatedCartItem) {
//             return res.status(404).json({ message: 'Cart item not found.' });
//         }
//         res.json(updatedCartItem);
//     } catch (error) {
//         res.status(400).json({ message: 'Error updating cart item: ' + error.message });
//     }
// };

// const remove_cart_item = async (req, res) => {
//     const { id } = req.params;

//     try {
//         const result = await Cart.findByIdAndDelete(id);
//         if (!result) {
//             return res.status(404).json({ message: 'Cart item not found.' });
//         }
//         res.json({ message: 'Cart item removed successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error removing cart item: ' + error.message });
//     }
// };

// module.exports = {
//     cart_all,
//     add_to_cart,
//     update_cart_item,
//     remove_cart_item
// };

const Cart = require('../model/Cart');

// Fetch all cart items
const fetch_carts = async (req, res) => {
    try {
        const carts = await Cart.find();
        console.log('Data sent');
        res.json(carts);
    }
    catch (error) {
        console.log('Fetch error :- ', error);
        res.json({ 'message': error });
    }
};

// Insert a cart item
const insert_cart_item = async (req, res) => {
    const cartItem = new Cart({
        p_id: req.body.p_id,
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        u_name: req.body.u_name,
        quantity: req.body.quantity
    });
    try {
        const savedCartItem = await cartItem.save();
        console.log('Cart item inserted');
        res.send(savedCartItem);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

// Update a cart item
const update_cart_item = async (req, res) => {
    const p_id = req.body.p_id;
    const cartUpdate = {
        p_img: req.body.p_img,
        p_cost: req.body.p_cost,
        u_name: req.body.u_name,
        quantity: req.body.quantity
    };
    try {
        const updatedCartItem = await Cart.updateOne({ p_id }, cartUpdate);
        if (updatedCartItem.modifiedCount != 0) {
            console.log('Cart item Updated', updatedCartItem);
            res.send({ 'update': 'success' });
        } else {
            console.log('Cart item not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
};

// Delete a cart item
const delete_cart_item = async (req, res) => {
    const p_id = req.body.p_id;
    try {
        const deletedCartItem = await Cart.deleteOne({ p_id });
        if (deletedCartItem.deletedCount != 0) {
            console.log('Cart item Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('Cart item Not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    fetch_carts,
    insert_cart_item,
    update_cart_item,
    delete_cart_item
};
