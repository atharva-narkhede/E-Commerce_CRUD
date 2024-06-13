/*const express = require('express');
const router = express.Router();
const { products_all, insert_product, update_product, delete_product } = require('../apis/productApis');

router.get('/', products_all);
router.post('/', insert_product);
router.put('/:id', update_product);
router.delete('/:id', delete_product);

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const { products_all, insert_product, update_product, delete_product } = require('../apis/productApis');

router.get('/fetch', products_all);
router.post('/insert', insert_product);
router.put('/update', update_product);
router.delete('/delete', delete_product);

module.exports = router;
