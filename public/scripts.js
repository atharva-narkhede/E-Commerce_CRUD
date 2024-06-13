function fetchUsers() {
    fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            const usersDiv = document.getElementById('users');
            usersDiv.innerHTML = '<h3>Users:</h3>' + JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching users:', error));
}

function fetchProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const productsDiv = document.getElementById('products');
            productsDiv.innerHTML = '<h3>Products:</h3>' + JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error fetching products:', error));
}
