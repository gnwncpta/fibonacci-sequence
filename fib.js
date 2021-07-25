// This is the Basic method of Fibonacci Sequence

function Fibonacci(n){
    if(n == 0){
        return 0;
    } else if(n == 1){
       return 1;
    } else {
       return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}

let res = [ Fibonacci(0), Fibonacci(1), Fibonacci(2), Fibonacci(3), Fibonacci(4), Fibonacci(5), Fibonacci(6), Fibonacci(7), Fibonacci(8), Fibonacci(9), Fibonacci(10) ];
console.log(res);

// Fibonacci(0) -> 0
// Fibonacci(1) -> 1
// Fiboancci(2) -> ( 2 - 1 ) + ( 2 - 2 ) = 1
// Fibonacci(3) -> ( 3 - 1 ) + ( 3 - 2 ) = 3
