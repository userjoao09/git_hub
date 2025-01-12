function sum(a, b) {
    if (!Number(a) || !Number(b)) {
        throw Error;
    }

    return a + b;
}

resultSum = sum(10, 40);
if (resultSum < 10) {
    console.log("O resultado da soma é menor que 10");
}

console.log("O resultado da soma é maior que 10");