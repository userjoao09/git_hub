function sum(a, b) {
    if (!Number(a) || !Number(b)) {
        throw Error;
    }

    return a + b;
}

console.log(sum);