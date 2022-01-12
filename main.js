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


function showNumberList() {
    
    let tag = '';
    for(i of numberList){
        tag += `<li onclick="deleteItem(this)">${i}</li>`;
    }
    
    document.getElementById('numbers').innerHTML = tag;

}

function showPerson() {
    
    let tag = '';
    for(i of people){
        tag += `<li onclick="deletePerson(${i.id})">${i.name}. salary: $${i.salary}</li>`;
    }
    
    document.getElementById('nameList').innerHTML = tag;

}

function addNumber() {

    const inputNum = document.getElementById('number');
    const num = inputNum.value;

    numberList.push(Number(num));
    showNumberList();
    inputNum.value = '';

}

function deleteItem(obj) {
    
    const value = obj.innerHTML;
    numberList.splice(numberList.indexOf(Number(value)), 1);
    showNumberList();

}

function deletePerson(id) {

    people.splice(people.findIndex((person) => person.id === id), 1);
    showPerson();

}

function basicStatistics() {

    const averageV = average(numberList);
    const medianV = median(numberList);
    const trendV = trend(numberList);

    document.getElementById('average').innerHTML = `Average: ${averageV}`;
    document.getElementById('median').innerHTML = `Median: ${medianV}`;
    document.getElementById('trend').innerHTML = `Trend: ${trendV[0]}`;
}

function addPerson() {

    const name = document.getElementById('personName');
    const salary = document.getElementById('personSalary');

    people.push(new Person(name.value, salary.value));
    showPerson();

    name.value = '';
    salary.value = '';

}