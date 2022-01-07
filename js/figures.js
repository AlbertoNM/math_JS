// Square formules

/**
 * This function takes the measurement of one side of the square to multiply it by 4 and returns the perimeter.
 * @param {number} a - one of the square sides.
 * @returns {number} The square perimeter .
 */
function squarePerimeter(a) {
    return a * 4;
}

/**
 * This function takes the measurement of one side of the square to multiply it by the height and returns the area.
 * @param {number} a - one of the square sides.
 * @returns {number} The square area.
 */
function squareArea(a) {
    return a * a;
}

// Triangle formules

/**
 * Clearing the Pythagorean equation.
 * @param {number} a - One of the triangle sides.
 * @param {number} b - One of the triangle sides.
 * @param {number} c - One of the triangle sides.
 * @returns {number} The result of the unknown (null).
 */
function pythagoras(a = null, b = null, c = null) {
    if (a === null){
        return Math.sqrt(Math.pow(c,2)-Math.pow(b,2)); 
    }else if (b === null) {
        return Math.sqrt(Math.pow(c,2)-Math.pow(a,2)); 
    }else if (c === null){
        return Math.sqrt(Math.pow(a,2)+Math.pow(b,2)); 
    };
}

/**
 * This function sums the three sides of the triangle.
 * @param {number} a - One of the triangle sides.
 * @returns {number} Triangle perimeter.
 */
function trianglePerimeter(a) {
    return a * 3;
}

/**
 * This function can take all three sides of the triangle or just base and multiply it by height.
 * @param {number} base - The triangle base.
 * @param {number} b - The triangle side b or the height.
 * @param {number} c - The triangle side c (optional).
 * @returns {number} Triangle area.
 */
function triangleArea(base, b, c) {
    if (base === b && base === c) {
        return base * pythagoras(base/2, null, c);
    } else if (b === c && base != b) {
        return base * pythagoras(base/2, null, c);
    } else {
        return (base * b)/2;
    }
}

// Circle formules

/**
 * This function takes the diameter and multiply it by PI.
 * @param {number} radious - The circle radious.
 * @returns {number} Circle perimeter.
 */
function circlePerimeter(radious) {
    return (radious * 2) * Math.PI;
}

/**
 * This function takes the radious square and multiply it by PI.
 * @param {number} radious - The circle radious.
 * @returns {number} Circle area.
 */
function circleArea(radious) {
    return Math.PI * Math.pow(radious,2);
}


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