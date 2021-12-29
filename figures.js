// Square

const squareSide = 5;

console.group('Square');
console.log(`The square side is: ${squareSide}cm`);
console.log(`The square perimeter is: ${squareSide*4}cm`);
console.log(`The square area is: ${squareSide*squareSide}cm^2`);
console.groupEnd();

// Triangle

function pythagoras(a = null, b = null, c = null){
    if (a === null){
        let result = Math.sqrt(Math.pow(c,2)-Math.pow(b,2));
        return result; 
    }else if (b === null) {
        let result = Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
        return result; 
    }else if (c === null){
        let result = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
        return result; 
    };
}

const triangleSide = 6;
const triangleSide2 = 6;
const triangleBase = 4;

console.group('Triangle');
console.log(`The triangle sides are: ${triangleSide} and ${triangleSide2}\nThe triangle base is: ${triangleBase}cm`);
console.log(`The triangle perimeter is: ${triangleSide + triangleSide2 + triangleBase}cm`);
console.log(`The triangle area is: ${triangleBase * pythagoras((triangleBase/2), null, triangleSide)}cm^2`);  
console.groupEnd();

// Circle

const circleRadius = 5;
const circleDiameter = circleRadius * 2;
const pi = Math.PI;
const circlePerimeter = circleDiameter * pi;
const circleArea = Math.pow(circleRadius,2) * pi;