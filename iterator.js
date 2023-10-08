/**
 * Function for a for of loop on an object on iterators
 * @param object
 */
const iterateObject = (object) => {
    const iterable = {};

    iterable[Symbol.iterator] = function* () {
        yield Object.entries(object);
    };

    console.log(...iterable);
}

const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

iterateObject(object);