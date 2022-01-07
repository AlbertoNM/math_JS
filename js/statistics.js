// Average

/**
 * This function takes a list and returns the average of the list.
 * @param {[number]} list - List with numbers.
 * @returns {number} List average.
 */
function average(list){

    // All the numbers in the list are added.
    const sumList = list.reduce((x = 0, y) => x + y);
     
    // The value of the sum is divided by the amount of data.
    const average = sumList / list.length;
    return average;

}

// Median

/**
 * This function takes an odd or even list and returns the middle or the average of the middle values in the list.
 * @param {[number]} list - List with numbers.
 * @returns {number} The middle value in the list.
 */
function median(list){
    
    // Sorting the list.
    list.sort((x, y) => x - y);

    // Evaluating whether the length of the list is even.
    if(list.length % 2 === 0){
        
        // If the list is even, a and b are the two middle values in the list.
        const a = list.length / 2;
        const b = a - 1;
        const values = [list[a], list[b]];
        return average(values);
        
    } else {

        // Returning the middle value in the odd list.
        const middle = Math.floor(list.length / 2);
        return list[middle];

    }
    
}