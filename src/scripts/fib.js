function fib(n) {
    var rez = 0
    if (n <= 1) {
        rez = n
    } else {
        rez += fib(n - 1) + fib(n - 2)
    }
    return rez
}

console.log('fib')
console.log(fib(0))                              // 0
console.log(fib(1))                              // 1
console.log(fib(10))                             // 55
console.log(fib(20))                             // 6765