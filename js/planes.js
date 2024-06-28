document.addEventListener("DOMContentLoaded", function() {
    const plansContainer = document.getElementById('plans-container');
    const cartList = document.getElementById('cart-list');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');
    const clearCartButton = document.getElementById('clear-cart-btn');
    let cart = [];

    // Event listener para añadir al carrito
    plansContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const planElement = event.target.closest('.plan');
            const id = planElement.id;
            const name = planElement.querySelector('h2').textContent;
            const price = parseInt(planElement.querySelector('p').textContent.replace(/[^\d]/g, ''));

            // Añadir al carrito (localStorage)
            addToCart(id, name, price);
        }
    });

    // Función para añadir al carrito (localStorage)
    function addToCart(id, name, price) {
        const item = { id, name, price };
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));

        // Actualizar visualización del carrito
        displayCart();
    }

    // Función para mostrar el carrito
    function displayCart() {
        cartList.innerHTML = '';
        let totalPrice = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - USD $${item.price}`;
            cartList.appendChild(li);
            totalPrice += item.price;
        });

        totalPriceDisplay.textContent = `Total: USD $${totalPrice}`;
    }

    // localStorage
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        displayCart();
    }

    // Event listener para finalizar compra
    checkoutButton.addEventListener('click', function() {
        if (cart.length > 0) {
            // Lógica para finalizar la compra

            // Mostrar mensaje de compra finalizada con SweetAlert
            Swal.fire({
                icon: 'success',
                title: '¡Compra Finalizada!',
                text: 'Tu compra ha sido procesada correctamente.'
            });

            // Limpiar el carrito (esto sería parte de tu lógica real)
            cart = [];
            localStorage.removeItem('cart');
            displayCart();
        } else {
            // Mostrar mensaje de carrito vacío con SweetAlert
            Swal.fire({
                icon: 'warning',
                title: '¡Carrito Vacío!',
                text: 'Agrega productos al carrito antes de finalizar la compra.'
            });
        }
    });

    // Event listener para vaciar el carrito
    clearCartButton.addEventListener('click', function() {
        cart = [];
        localStorage.removeItem('cart');
        displayCart();
    });
});
