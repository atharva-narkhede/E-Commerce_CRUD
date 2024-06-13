/*const User = require('../model/User');

const user_all = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const insert_user = async (req, res) => {
    const user = new User(req.body);
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const update_user = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const delete_user = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { user_all, insert_user, update_user, delete_user };
*/
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
        u_serid: req.body.u_serid,
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
    const u_serid = req.body.u_serid;
    const userUpdate = {
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_email: req.body.u_email,
        u_addr: req.body.u_addr,
        u_contact: req.body.u_contact
    };
    try {
        const updatedUser = await User.updateOne({ u_serid }, userUpdate);
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
    const u_serid = req.body.u_serid;
    try {
        const deletedUser = await User.deleteOne({ u_serid });
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
