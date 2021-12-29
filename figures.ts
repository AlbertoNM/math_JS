// Square formules

/**
 * Perimeter Square
 * This function takes the measurement of one side of the square to multiply it by 4 and returns the perimeter
 * @param {number} a - one of the square sides
 * @returns {number} - The square perimeter 
 */
function squarePerimeter(a:number): number {
    return a * 4;
}

/**
 * Square area
 * This function takes the measurement of one side of the square to multiply it by the height and returns the area
 * @param {number} a - one of the square sides
 * @returns {number} - The square area
 */
function squareArea(a:number): number {
    return a * a;
}

// Triangle formules

/**
 * Clearing the Pythagorean equation
 * @param {number} a - One of the triangle sides
 * @param {number} b - One of the triangle sides 
 * @param {number} c - One of the triangle sides 
 * @returns {number} - The result of the unknown (null)
 */
function pythagoras(a:number = null, b:number = null, c:number = null): number {
    if (a === null){
        return Math.sqrt(Math.pow(c,2)-Math.pow(b,2)); 
    }else if (b === null) {
        return Math.sqrt(Math.pow(c,2)-Math.pow(a,2)); 
    }else if (c === null){
        return Math.sqrt(Math.pow(a,2)+Math.pow(b,2)); 
    };
}

/**
 * Triangle perimeter
 * This function sums the three sides of the triangle
 * @param {number} a - One of the triangle sides
 * @param {number} b - One of the triangle sides
 * @param {number} c - One of the triangle sides
 * @returns {number} - Triangle perimeter
 */
function trianglePerimeter(a:number, b:number, c:number): number {
    return a + b + c;
}

/**
 * Triangle Area
 * This function can take all three sides of the triangle or just base and multiply it by height
 * @param {number} base - The triangle base 
 * @param {number} b - The triangle side b or the height
 * @param {number} c - The triangle side c (optional)
 * @returns {number} - Triangle area
 */
function triangleArea(base:number, b:number, c?:number): number {
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
 * Circle perimeter
 * This function takes the diameter and multiply it by PI 
 * @param {number} diameter - The circle diameter 
 * @returns {number} - Circle perimeter
 */
function circlePerimeter(diameter:number):number {
    return diameter * Math.PI
}

/**
 * Circle area
 * This function takes the radious square and multiply it by PI
 * @param {number} radious - The circle radious
 * @returns {number} - Circle area
 */
function circleArea(radious:number):number {
    return Math.PI * Math.pow(radious,2)
}
