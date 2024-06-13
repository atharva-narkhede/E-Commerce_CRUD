// const Product = require('../model/Product');

// const products_all = async (req, res) => {
//     try {
//         const products = await Product.find();
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const insert_product = async (req, res) => {
//     const product = new Product(req.body);
//     try {
//         const newProduct = await product.save();
//         res.status(201).json(newProduct);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const update_product = async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedProduct);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const delete_product = async (req, res) => {
//     try {
//         const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//         res.json({ message: 'Product deleted' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// module.exports = { products_all, insert_product, update_product, delete_product };

const Product = require('../model/Product');

// Fetch all products
const products_all = async (req, res) => {
    try {
        const products = await Product.find();
        console.log('Data sent');
        res.json(products);
    } catch (error) {
        console.log('Fetch error :- ', error);
        res.json({ 'message': error });
    }
};

// Insert a product
const insert_product = async (req, res) => {
    const product = new Product({
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_cost: req.body.p_cost,
        p_cat: req.body.p_cat,
        p_desc: req.body.p_desc,
        p_img: req.body.p_img
    });
    try {
        const savedProduct = await product.save();
        console.log('Product inserted');
        res.send(savedProduct);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update a product
const update_product = async (req, res) => {
    const p_id = req.body.p_id;
    const productUpdates = {
        p_name: req.body.p_name,
        p_cost: req.body.p_cost,
        p_cat: req.body.p_cat,
        p_desc: req.body.p_desc,
        p_img: req.body.p_img
    };
    try {
        const updateProduct = await Product.updateOne({ p_id }, productUpdates);
        if (updateProduct.modifiedCount != 0) {
            console.log('Product Updated', updateProduct);
            res.send({ 'update': 'success' });
        } else {
            console.log('Product not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a product
const delete_product = async (req, res) => {
    const p_id = req.body.p_id;
    try {
        const deletedProduct = await Product.deleteOne({ p_id });
        if (deletedProduct.deletedCount != 0) {
            console.log('Product Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('Product Not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    products_all,
    insert_product,
    update_product,
    delete_product
};
