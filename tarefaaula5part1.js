let numeros = "";

for (let x = 1; x<=10; x = x+1){
    if(x == 10){
        numeros = numeros + x  + ".";
    }else{
        numeros = numeros + x + ",";
    }
    
}

console.log(numeros);