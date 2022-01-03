// Discount function

/**
 * This function returns the final price of a discounted product
 * @param {number} price - Product price
 * @param {number} discount - Product discount
 * @returns The discounted price
 */
function discount(price, discount) {
    
    // Formule = ( price * (100 - discount) ) / 2 
    const percentageToPay = 100 - discount;
    const finalPrice = (price * percentageToPay) / 100;
    
    return finalPrice;
}

// HTML interaction

/**
 * This function returns the final price in discounts.html
 */
function priceDiscount() {

    // Getting price
    const inputPrice = document.getElementById('inputPrice');
    const price = inputPrice.value;

    // Getting discount
    const inputDiscount = document.getElementById('inputDiscount');
    const discountP = inputDiscount.value;

    // Calculating discount
    const finalPrice = discount(price, discountP);

    // Putting the final price in discounts.html
    const result = document.getElementById('result');
    result.innerText = `$${finalPrice}`;

}