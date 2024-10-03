const form = document.querySelector('.form-container');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const typeSelect = document.querySelector('#type');
const totalPriceElement = document.querySelector('#totalPrice');
let total = 0;

const pancakePriceCalc = () => {
    total = parseInt(typeSelect.value) || 0;

    checkToppings();

    totalPriceElement.textContent = `${total.toFixed(0)}€`;

    const priceBanner = document.querySelector('.price-banner');
    priceBanner.animate( // add an animation to price change in .price-banner
        [
            { transform: 'scale(1)' },
            { transform: 'scale(1.05)' },
            { transform: 'scale(1)' },
        ],
        {
            duration: 100,
            iterations: 1, // iterate once
        }
    );
};

const checkToppings = () => {
    for (const item of checkboxes) { // for each item if checked, add to total
        if (item.checked) {
            const itemPrice = parseInt(item.value) || 0;
            total += itemPrice;
        }
    }
};

form.addEventListener('change', pancakePriceCalc);

pancakePriceCalc();
