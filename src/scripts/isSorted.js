function isSorted(array) {
    for (var i = 1; i < array.length; i++) {
        if (array [i-1] > array[i]){
            return false
        }
    }
    return true
}

console.log('isSorted')
console.log(isSorted([]))                        // true
console.log(isSorted([-Infinity, -5, 0, 3, 9]))  // true
console.log(isSorted([3, 9, -3, 10]))            // false