// Average

/**
 * This function takes a list and returns the average of the list
 * @param {[number]} list - List with numbers
 * @returns {number} List average 
 */
function average(list){

    // All the numbers in the list are added
    const sumList = list.reduce((x = 0, y) => x + y);
     
    // The value of the sum is divided by the amount of data
    const average = sumList / list.length;

    return average;

}