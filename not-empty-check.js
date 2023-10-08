/**
 * Function to check if an array or object is not empty
 * @param structure
 * @returns {boolean}
 */
const checkNotEmpty = (structure) => {
    if (Array.isArray(structure)) {
        return !!structure.length;
    }

    if (Object.keys(structure)) {
        return !!Object.keys(structure).length;
    }
};

console.log(checkNotEmpty([1, 2, 3]));
console.log(checkNotEmpty([]));
console.log(checkNotEmpty({}));
console.log(checkNotEmpty({a: 1, b: 2}));