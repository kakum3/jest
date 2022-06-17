// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
    
}

function fromDollarToYen(a){
    return a/1.2*127.9

};

function fromEuroToDollar(b){
    return b*1.2
};

function fromYenToPound(c){
    return c/0.8*127.9
};
console.log(fromYenToPound(10))
module.exports = { sum ,fromYenToPound,fromEuroToDollar,fromDollarToYen};