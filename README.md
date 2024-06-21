# E-Commerce CRUD Operations Backend API

This project is a backend API for handling CRUD operations in an e-commerce application. The API is built using Node.js, Express, and Mongoose for MongoDB.

## Features

- **Create**: Add new users, products, and carts.
- **Read**: Fetch user, product, and cart details.
- **Update**: Modify existing user, product, and cart information.
- **Delete**: Remove users, products, and carts from the database.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (>= 14.0.0)
- MongoDB (>= 4.0)
- Git
- Postman (for testing the API)

## Getting Started

### Cloning the Repository

To get a local copy up and running, follow these simple steps:

1. Clone the repository

    ```sh
    git clone https://github.com/atharva-narkhede/E-Commerce_CRUD.git
    ```

2. Navigate to the project directory

    ```sh
    cd E-Commerce_CRUD
    ```

### Installing Dependencies

Run the following command to install the required dependencies:

```sh
npm install
```

### Updating MongoDB URL

Update the `url.js` file in the root directory with your own MongoDB URL:

```javascript
// url.js file
module.exports = "mongodb://localhost:27017";
```

### Running the Application

Start the development server with the following command:

```sh
npm start
```

The server will start on `http://localhost:8080`.

## Directory Structure

- `models/`: Contains schema definitions for User, Cart, and Product.
- `routes/`: Contains route files for User, Cart, and Product.
- `api/`: Contains API logic for Product APIs, Cart APIs, and User APIs.

## API Endpoints

### Common Endpoints for Users, Products, and Carts

#### Create

- **URL**: `/api/{entity}/insert`
- **Method**: `POST`

#### Fetch

- **URL**: `/api/{entity}/fetch`
- **Method**: `GET`

#### Update

- **URL**: `/api/{entity}/update`
- **Method**: `PUT`

#### Delete

- **URL**: `/api/{entity}/delete`
- **Method**: `DELETE`

Replace `{entity}` with `users`, `products`, or `cart` to perform the respective operations.

## Testing the API with Postman

1. Open Postman and create a new collection.
2. Add requests to the collection for each of the CRUD operations.
3. Set the request method and URL according to the API endpoints described above.
4. Send the requests and verify the responses.

## Related Projects

This backend API is designed to work with the following frontend application:

- [E-CommerceSite_ReactJS](https://github.com/atharva-narkhede/E-CommerceSite_ReactJS)

## Contributing

Contributions are what make the open-source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Atharva Narkhede - [atharvan12345@gmail.com](mailto:atharvan12345@gmail.com)

Project Link: [https://github.com/atharva-narkhede/E-Commerce_CRUD](https://github.com/atharva-narkhede/E-Commerce_CRUD)
