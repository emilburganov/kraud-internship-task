/**
 * Function to filter an array
 * @param array
 * @param callback
 * @returns {*[]}
 */
const filter = (array, callback) => {
    const result = [];

    array.forEach((item) => {
        if (callback(item)) {
            result.push(item);
        }
    })

    return result;
}

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = filter(numbers, function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers);