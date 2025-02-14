// Array of products
const products = [
    { id: 1, name: "Running Shoes", price: 2500, image: "shoes.jpg" },
    { id: 2, name: "Water Bottle", price: 500, image: "bottle.jpg" },
    { id: 3, name: "Sweatband", price: 300, image: "sweatband.jpg" },
    { id: 4, name: "Running Shorts", price: 1200, image: "shorts.jpg" }
];

// Array to store items added to cart
let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.querySelector(".product-list");

    products.forEach(product => {
        // Create product container
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        // Product image
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;

        // Product name
        const name = document.createElement("h3");
        name.textContent = product.name;

        // Product price
        const price = document.createElement("p");
        price.textContent = `₱${product.price.toLocaleString()}`;

        // Add to Cart button
        const button = document.createElement("button");
        button.textContent = "Add to Cart";
        button.addEventListener("click", () => addToCart(product));

        // Append elements to productDiv
        productDiv.appendChild(img);
        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(button);

        // Append productDiv to product list
        productList.appendChild(productDiv);
    });
}

// Function to add an item to the cart
function addToCart(product) {
    cart.push(product);
    updateCart();
}

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalPrice = document.getElementById("total-price");

    // Clear previous cart items
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ₱${item.price.toLocaleString()}`;

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeFromCart(index));

        li.appendChild(removeBtn);
        cartItems.appendChild(li);

        total += item.price;
    });

    // Update total price
    totalPrice.textContent = `Total: ₱${total.toLocaleString()}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item at given index
    updateCart();
}

// Initialize product display on page load
displayProducts();
