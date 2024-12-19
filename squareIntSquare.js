const isSquare = function (n) {
    const sqrt = Math.sqrt(n);
    if (n > 0 && sqrt === Math.floor(sqrt)) return true;
    else return false

}

console.log(isSquare(26))