/**
 * Function to get all object keys including prototype
 * @param object
 * @returns {*[]}
 */
const getObjectKeys = (object) => {
    const keys = [];

    for (let key in object) {
        keys.push(key);
    }

    const prototype = Object.getPrototypeOf(object);

    if (prototype !== null) {
        const prototypeKeys = getObjectKeys(prototype);
        keys.push(...prototypeKeys);
    }

    return keys;
}

const object = {
    a: 1,
    b: 2
};

const objectPrototype = Object.create(object);
objectPrototype.c = 3;

const keys = getObjectKeys(objectPrototype);
console.log(keys);
