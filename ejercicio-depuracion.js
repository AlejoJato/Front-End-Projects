function Fibonacci (num) {
    const array = [];
    let a = 1;
    let b = 1;

    if (num === 1) {
        array.push(a)
    } else if (num === 2){
        array.push(a, b)
    } else if (num > 2) {
        for (let i = 2; i < num; i++){
            let c = a + b
            a = b
            b = c
            array.push(c)
        }
        array.unshift(1, 1)
    }
    return array
}

const arraydef = Fibonacci(6)

console.log(arraydef);