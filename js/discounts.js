// Discount function

/**
 * This function returns the final price of a discounted product.
 * @param {number} price - Product price.
 * @param {number} discount - Product discount.
 * @returns The discounted price.
 */
function discount(price, discount) {
    
    // Formule = ( price * (100 - discount) ) / 2 
    const percentageToPay = 100 - discount;
    const finalPrice = (price * percentageToPay) / 100;
    
    return finalPrice;
}