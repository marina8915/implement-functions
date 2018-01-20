// isPrime - Returns true or false, indicating whether the given number is prime.
function isPrime(n) {
    var sum = 0
    if (n <= 1) {
        return false
    } else {
        for (var i = 2; i < n+1; i++) {
                if (n % i === 0) {
                    sum++
                    if (n === 2) {
                        return true
                    }
                }
                if (sum > 1){
                    return false
                }
        }
        if (sum === 1) {
            return true
        }
    }
}

console.log(isPrime(0))                          // false
console.log(isPrime(1))                          // false
console.log(isPrime(17))                         // true
console.log(isPrime(10000000000000))             // false
