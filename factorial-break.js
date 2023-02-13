let factorial = 1;
let r = 0;

while (true){
    factorial *= r + 1
    r++;

    if(r >= 10){
        break;
    }
}

console.log(factorial)