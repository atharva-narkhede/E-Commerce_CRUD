const User = require('../model/User');

// Fetch all users
const fetch_users = async (req, res) => {
    try {
        const users = await User.find();
        console.log('Data sent');
        res.json(users);
    }
    catch (error) {
        console.log('Fetch error :- ', error);
        res.json({ 'message': error });
    }
};

// Insert a user
const insert_user = async (req, res) => {
    const user = new User({
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_email: req.body.u_email,
        u_addr: req.body.u_addr,
        u_contact: req.body.u_contact
    });
    try {
        const savedUser = await user.save();
        console.log('User inserted');
        res.send(savedUser);
    }
    catch (error) {
        res.status(400).send(error);
    }
};

// Update a user
const update_user = async (req, res) => {
    const u_email=req.body.u_email;
    const userUpdate = {
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_addr: req.body.u_addr,
        u_contact: req.body.u_contact,
        token:req.body.token
    };
    try {
        const updatedUser = await User.updateOne({ u_email }, userUpdate);
        if (updatedUser.modifiedCount != 0) {
            console.log('User Updated', updatedUser);
            res.send({ 'update': 'success' });
        } else {
            console.log('User not updated');
            res.send({ 'update': 'Record Not Found' });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
};

// Delete a user
const delete_user = async (req, res) => {
    const u_email = req.body.u_email;
    try {
        const deletedUser = await User.deleteOne({ u_email });
        if (deletedUser.deletedCount != 0) {
            console.log('User Deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('User Not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    }
    catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    fetch_users,
    insert_user,
    update_user,
    delete_user
};
