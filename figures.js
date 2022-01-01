// Modules
import { squareArea, squarePerimeter } from './formules';

// interaction with HTML
function calculateSquarePerimeter(){
    const input = document.getElementById('squareSide');
    const value = input.value;

    const perimeter = squarePerimeter(value);
    alert(perimeter);
}

function calculateSquareArea(){
    const input = document.getElementById('squareSide');
    const value = input.value;

    const area = squareArea(value);
    alert(area);
}