document.addEventListener('DOMContentLoaded', function() {
    var cartItems = document.querySelectorAll('#cart-items tbody tr');
    var totalPrice = 0;

    cartItems.forEach(function(item) {
        var price = parseFloat(item.querySelector('td:nth-child(2)').textContent.replace('$', ''));
        totalPrice += price;
    });

    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    var confirmOrderBtn = document.getElementById('confirm-order-btn');
    var orderConfirmation = document.getElementById('order-confirmation');

    confirmOrderBtn.addEventListener('click', function() {
        orderConfirmation.textContent = 'Your order has been confirmed and will be delivered soon.';
        orderConfirmation.style.color = 'green';
    });
});
