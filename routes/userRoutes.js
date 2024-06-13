// const express = require('express');
// const router = express.Router();
// const { user_all, insert_user, update_user, delete_user } = require('../apis/userApis');

// router.get('/', user_all);
// router.post('/', insert_user);
// router.put('/:id', update_user);
// router.delete('/:id', delete_user);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { fetch_users, insert_user, update_user, delete_user } = require('../apis/userApis');

router.get('/fetch', fetch_users);          // Fetch all users
router.post('/insert', insert_user);        // Insert a new user
router.put('/update', update_user);        // Update an existing user
router.delete('/delete', delete_user);        // Delete a user

module.exports = router;
