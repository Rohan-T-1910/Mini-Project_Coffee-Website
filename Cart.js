let cart = [];

// Function to handle "Add to Cart" button click
function addToCart(productName, price, size) {
    if (!size) {
        alert("Please select a size before adding to cart!");
        return;
    }
    
    const item = { name: productName, price: price, size: size };
    cart.push(item);
    updateCartCount();
}

// Update the cart icon counter
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Display cart items when the cart icon is clicked
function showCartPage() {
    const cartPage = document.getElementById('cart-page');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} (${item.size}) - ${item.price}/-`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });

    cartPage.classList.toggle('hidden');
}

// Remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showCartPage(); // Refresh cart page
}

// Checkout function (you can modify this as needed)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for your purchase!');
    cart = []; // Clear cart
    updateCartCount();
    showCartPage(); // Refresh cart page
}

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.addcart').forEach((button) => {
    const productElement = button.parentElement;
    const productName = productElement.querySelector('h2').textContent;
    const priceText = productElement.querySelector('.price').textContent;
    const price = parseFloat(priceText.replace(/[^0-9.-]+/g, ""));

    let selectedSize = null;

    // Handle size selection from dropdown
    productElement.querySelectorAll('.dropdown-content a').forEach((sizeOption) => {
        sizeOption.addEventListener('click', (event) => {
            event.preventDefault();
            selectedSize = sizeOption.getAttribute('data-size');
            productElement.querySelector('button').textContent = `Size: ${selectedSize}`;
        });
    });

    // Add to Cart button functionality
    button.addEventListener('click', () => addToCart(productName, price, selectedSize));
});