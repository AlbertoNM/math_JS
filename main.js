// interaction with HTML

/**
 * This function returns the square properties in figures.html.
 */
 function squareResults(){
    
    // Getting value side.
    const input = document.getElementById('squareSide');
    const value = input.value;

    // Calculating properties.
    const perimeter = squarePerimeter(value);
    const area = squareArea(value);

    // Putting the results in figures.html.
    const resultPerimeter = document.getElementById('squareResultPerimeter');
    resultPerimeter.innerText = `Perimeter: ${perimeter} cm`;

    const resultArea = document.getElementById('squareResultArea');
    resultArea.innerText = `Area: ${area} cm^2`;

}

/**
 * This function returns the triangle properties in figures.html.
 */
function triangleResults() {
    
    // Getting value side.
    const input = document.getElementById('triangleSide');
    const value = input.value;

    // Calculating propierties.
    const perimeter = trianglePerimeter(value);
    const height = pythagoras(value/2, null, value); // Calculating triangle height.
    const area = triangleArea(value, height);

    // Putting the result in figures.html.
    const resultPerimeter = document.getElementById('triangleResultPerimeter');
    resultPerimeter.innerText = `Perimeter: ${perimeter} cm`;

    const resultArea = document.getElementById('triangleResultArea');
    resultArea.innerText = `Area: ${area} cm^2`; 
    
}

/**
 * This function returns the circle properties in figures.html.
 */
function circleResults() {
    
    // Getting value side.
    const input = document.getElementById('circleSide');
    const value = input.value;

    // Calculating properties.
    const perimeter = circlePerimeter(value);
    const area = circleArea(value);

    // Putting the results in figures.html.
    const resultPerimeter = document.getElementById('circleResultPerimeter');
    resultPerimeter.innerText = `Perimeter: ${perimeter} cm`;

    const resultArea = document.getElementById('circleResultArea');
    resultArea.innerText = `Area: ${area} cm^2`;

}

/**
 * This function returns the final price in discounts.html.
 */
 function priceDiscount() {

    // Getting price.
    const inputPrice = document.getElementById('inputPrice');
    const price = inputPrice.value;

    // Getting discount.
    const inputDiscount = document.getElementById('inputDiscount');
    const discountP = inputDiscount.value;

    // Calculating discount.
    const finalPrice = discount(price, discountP);

    // Putting the final price in discounts.html.
    const result = document.getElementById('result');
    result.innerText = `$${finalPrice}`;

}