function getMiddle(s) {
    if (s.length % 2 !== 0) {
        return s[Math.floor(s.length / 2)];
    } else {
        const midChars = s.length/2;
        return s[midChars - 1] + s[midChars];
    }
}
console.log(getMiddle(`afwfaw`));