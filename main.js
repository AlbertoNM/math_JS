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
    resultPerimeter.innerText = `Perimeter: ${perimeter.toFixed(2)} cm`;

    const resultArea = document.getElementById('squareResultArea');
    resultArea.innerText = `Area: ${area.toFixed(2)} square cm`;

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
    resultPerimeter.innerText = `Perimeter: ${perimeter.toFixed(2)} cm`;

    const resultArea = document.getElementById('triangleResultArea');
    resultArea.innerText = `Area: ${area.toFixed(2)} square cm`; 
    
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
    resultPerimeter.innerText = `Perimeter: ${perimeter.toFixed(2)} cm`;

    const resultArea = document.getElementById('circleResultArea');
    resultArea.innerText = `Area: ${area.toFixed(2)} square cm`;

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
    result.innerText = `Discount: $${finalPrice}`;

}

/**
 * This function show the numberList in statistics.html.
 */
function showNumberList() {
    
    // Make a label for each number in the list.
    let tag = '';
    for(i of numberList){
        tag += `<li onclick="deleteItem(this)" class="box--item">${i}</li>`;
    }
    
    // Insert the tag in the <ul> label.
    document.getElementById('numbers').innerHTML = tag;

}

/**
 * This function returns the basic statistics of numberList.
 */
 function basicStatistics() {

    // Getting the statistics values of numberList.
    const averageV = average(numberList);
    const medianV = median(numberList);
    const trendV = trend(numberList);

    // Putting the values in statistics.html.
    document.getElementById('average').innerHTML = `Average: ${averageV.toFixed(2)}`;
    document.getElementById('median').innerHTML = `Median: ${medianV}`;
    document.getElementById('trend').innerHTML = `Trend: ${trendV[0]}`;

}

/**
 * This function show the people list in salaries.html.
 */
function showPerson() {
    
    // Make a label for each people in the list.
    let tag = '';
    for(i of people){
        tag += `<li onclick="deletePerson(${i.id})" class="box--item">${i.name}<br/> salary: $${i.salary}</li>`;
    }
    
    // Insert the tag in the <ul> label.
    document.getElementById('nameList').innerHTML = tag;

}

/**
 * This function takes the number to be deleted clicking the value.
 * @param {number} obj - The value to be deleted.
 */
function deleteItem(obj) {
    
    // Geting the value in the <li> tag.
    const value = obj.innerHTML;

    // Searching and deleting the value.
    numberList.splice(numberList.indexOf(Number(value)), 1);
    showNumberList();

}

/**
 * This function takes the id of the object clicking the value.
 * @param {number} id - The id of the object.
 */
function deletePerson(id) {

    // Searching and deleting the abject with his id.
    people.splice(people.findIndex((person) => person.id === id), 1);
    showPerson();

}

/**
 * This function take the value of the input and adds it to numberList.
 */
 function addNumber() {

    // Taking the value of the input.
    const inputNum = document.getElementById('number');
    const num = inputNum.value;

    // Sending the value to the list.
    numberList.push(Number(num));
    showNumberList();
    inputNum.value = '';

}

/**
 * Ths function take the values of the inputs and adds it to the peopel list.
 */
function addPerson() {

    // Getting the names and salary.
    const name = document.getElementById('personName');
    const salary = document.getElementById('personSalary');

    // Sending the values in the people list.
    people.push(new Person(name.value, salary.value));
    showPerson();

    // Restarting the inputs.
    name.value = '';
    salary.value = '';

}