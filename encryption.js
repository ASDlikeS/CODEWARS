const encrypt = (text, n) => {
    if (text === `` || n <= 0) {
        return text;
    }
    let encrypString = text;
    for (let index = 0; index < n; index++) {

        let oddStr = ``;
        let evenStr = ``;

        for (let duplex = 0; duplex < encrypString.length; duplex++) {
            duplex % 2 === 0 ? evenStr += encrypString[duplex] : oddStr += encrypString[duplex];
        }
        encrypString = oddStr + evenStr
    }
    return encrypString;

}

function decrypt(S, N) {
    if (S === "" || N <= 0) return S;

    for (let i = 0; i < N; i++) {
        let odd = S.slice(0, Math.floor(S.length / 2));
        let even = S.slice(Math.floor(S.length / 2)); 
        let result = "";
        
       
        for (let j = 0; j < even.length; j++) {
            result += even[j]; 
            if (j < odd.length) {
                result += odd[j];  
            }
        }
        
        S = result; 
    }
    
    return S;
}

//Function's Review;------------

const decryptString = encrypt(`helloWorld`, 3)

console.log (decryptString);

console.log(decrypt(decryptString, 7))
