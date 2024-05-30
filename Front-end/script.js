document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsList = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');

    let cartItems = [];
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const price = parseFloat(button.getAttribute('data-price'));
            total += price;
            cartItems.push({ name: button.previousElementSibling.textContent, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItemsList.innerHTML = '';
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(li);
        });
        cartCount.textContent = cartItems.length;
        cartTotal.textContent = total.toFixed(2);
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    checkoutBtn.addEventListener('click', function() {
        alert(`Total: $${total.toFixed(2)}\nThank you for shopping with us!`);
        cartItems = [];
        total = 0;
        updateCart();
    });
});
