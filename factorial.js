function factorial(n) {
    if (n) {
        return n * factorial(n - 1)
    } else return 1
}

console.log('factorial')
console.log(factorial(0))                        // 1
console.log(factorial(1))                        // 1
console.log(factorial(6))                        // 720