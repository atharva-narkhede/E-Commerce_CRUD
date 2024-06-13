// const express = require('express');
// const router = express.Router();
// const cartApi = require('../apis/cartApis');

// // Get all items in the cart
// router.get("/cart", cartApi.cart_all);

// // Add an item to the cart
// router.post("/cart", cartApi.add_to_cart);

// // Update an item in the cart
// router.put("/cart/:id", cartApi.update_cart_item);

// // Remove an item from the cart
// router.delete("/cart/:id", cartApi.remove_cart_item);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { fetch_carts, insert_cart_item, update_cart_item, delete_cart_item } = require('../apis/cartApis');

router.get('/fetch', fetch_carts);
router.post('/insert', insert_cart_item);
router.put('/update', update_cart_item);
router.delete('/delete', delete_cart_item);

module.exports = router;
