// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// let url = require('./url');
// const app = express();


// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// mongoose.connect(url, { dbName: "project" })
//     .then(() => {
//         console.log('coneection success')
//     }, (errRes) => { console.log('connection failed', errRes) })


// const userRoutes = require('./routes/userRoutes');
// const productRoutes = require('./routes/productRoutes');
// const cartRoutes = require('./routes/cartRoutes');


// app.use("/users", userRoutes);
// app.use("/products", productRoutes);
// app.use("/cart", cartRoutes);


// app.use(express.static('public'));


// const port = process.env.PORT || 8080;
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:8080`);
// });


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const url = require('./url');
const app = express();

// Apply middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB
mongoose.connect(url, { dbName: "project" })
    .then(() => {
        console.log('Connection successful');
    })
    .catch(err => {
        console.log('Connection failed', err);
    });

// Import routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Setup API routes
app.use("/api/users", userRoutes); // Prefix with /api to clarify API route nature
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

// Serve static files
app.use(express.static('public'));

// Define the server port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


