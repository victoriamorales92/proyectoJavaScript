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
document.addEventListener("DOMContentLoaded", function() {
    const plansContainer = document.getElementById('plans-container');
    const cartList = document.getElementById('cart-list');
    const totalPriceDisplay = document.getElementById('total-price');
    let cart = [];

    // Obtener los datos del JSON y mostrar los planes
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Mostrar los planes en la página
            data.forEach(plan => {
                const planElement = document.createElement('div');
                planElement.classList.add('plan');
                planElement.id = plan.id;

                const html = `
                    <h2>${plan.name}</h2>
                    <p>Inversión mínima: USD $${plan.minimumInvestment}</p>
                    <ul>
                        ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                    <button class="add-to-cart-btn" data-id="${plan.id}" data-name="${plan.name}" data-price="${plan.minimumInvestment}">Agregar al carrito</button>
                `;
                planElement.innerHTML = html;

                plansContainer.appendChild(planElement);
            });
        })
        .catch(error => console.error('Error al cargar los datos JSON', error));

    // Event listener para añadir al carrito
    plansContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const id = event.target.getAttribute('data-id');
            const name = event.target.getAttribute('data-name');
            const price = parseInt(event.target.getAttribute('data-price'));

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

    // Cargar carrito desde localStorage si existe
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        displayCart();
    }
});

const buscarPlanPorNombre = (nombre) => planes.find(plan => plan.nombre === nombre);

const nombreBuscado = prompt("Ingrese el nombre del plan que desea buscar:");
const planEncontrado = buscarPlanPorNombre(nombreBuscado);

if (planEncontrado) {
    console.log("Inversión Mínima: " + planEncontrado.inversionMinima + " USD");
} else {
    alert('El plan con el nombre "' + nombreBuscado + '" no se encontró.');
}

