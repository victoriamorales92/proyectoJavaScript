document.addEventListener("DOMContentLoaded", function() {
    const plans = [
        {
            id: "plan-platino",
            price: 10000
        },
        {
            id: "plan-oro",
            price: 5000
        },
        {
            id: "plan-plata",
            price: 2000
        },
        {
            id: "plan-bronce",
            price: 1000
        }
    ];

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartList = document.getElementById('cart-list');
    const totalPriceDisplay = document.getElementById('total-price');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planId = button.parentElement.id;
            const selectedPlan = plans.find(plan => plan.id === planId);
            if (selectedPlan) {
                cart.push(selectedPlan);
                renderCart();
            }
        });
    });

    function renderCart() {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `Plan ${item.id} - USD $${item.price}`;
            cartList.appendChild(li);
            total += item.price;
        });

        totalPriceDisplay.textContent = `Total: USD $${total}`;
    }
});
