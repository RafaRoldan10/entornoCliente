Math.maximoComunDivisor = function(a,b){
    if(a % b == 0){
        return b
    }
    else{
        return Math.maximoComunDivisor(b, a%b);
    }
}

Math.minimoComunMultiplo = function (a,b){
    return a * b / Math.maximoComunDivisor(a,b);
}

console.log(Math.maximoComunDivisor(24,72));
console.log(Math.minimoComunMultiplo(24,72));