// Variables
let cart = [];
const products = [
    { id: 1, name: "Product 1", price: 100.00 },
    { id: 2, name: "Product 2", price: 105.00 },
    { id: 3, name: "Product 3", price: 200.00 }
    ,
    { id: 4, name: "Product 4", price: 270.00 },
    { id: 5, name: "Product 5", price: 250.00 }
];


document.querySelectorAll('.increase').forEach(button =>
{
    button.addEventListener('click', function ()
    {
        const quantityElement = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
    });
});

document.querySelectorAll('.decrease').forEach(button =>
{
    button.addEventListener('click', function ()
    {
        const quantityElement = this.parentElement.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantity--;
        }
        quantityElement.textContent = quantity;
    });
});
document.querySelectorAll('.add-to-cart').forEach(button =>
{
    button.addEventListener('click', function ()
    {
        const productId = this.parentElement.getAttribute('data-id');
        const product = products.find(p => p.id == productId);
        const quantityElement = this.parentElement.querySelector('.quantity');
        const quantity = parseInt(quantityElement.textContent);
        addToCart(product, quantity);
    });
});

function addToCart(product, quantity)
{
    const cartItem = cart.find(item => item.id === product.id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    updateCart();
}
function updateCart()
{
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item =>
    {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.name} x ${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(itemDiv);
    });

    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
}

// Cart Modal
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeModal = document.getElementById('close-modal');

cartBtn.addEventListener('click', () =>
{
    cartModal.style.display = 'flex';
});

closeModal.addEventListener('click', () =>
{
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) =>
{
    if (e.target == cartModal) {
        cartModal.style.display = 'none';
    }
});

// Checkout
document.getElementById('checkout-btn').addEventListener('click', () =>
{
    alert('Transaction Successful');
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
});
