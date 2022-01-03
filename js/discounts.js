// Discount function

/**
 * This function returns the final price of a discounted product
 * @param {number} price - Product price
 * @param {number} discount - Product discount
 * @returns The discounted price
 */
function discount(price, discount) {
    const percentageToPay = 100 - discount;
    const finalPrice = (price * percentageToPay) / 100;
    
    return finalPrice;
}

// HTML interaction

function priceDiscount() {

    const inputPrice = document.getElementById('inputPrice');
    const price = inputPrice.value;

    const inputDiscount = document.getElementById('inputDiscount');
    const discountP = inputDiscount.value;

    const finalPrice = discount(price, discountP);

    const result = document.getElementById('result');
    result.innerText = `$${finalPrice}`;
    
}