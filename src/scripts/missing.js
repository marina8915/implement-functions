function missing(arr) {
    var missingItems = []
    arr.sort(function (a, b) {
        return a > b
    })
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(i + 1) === -1) {
            missingItems.push(i + 1)
        }
    }
    return missingItems
}

console.log('missing')
console.log(missing([]))                         // undefined
console.log(missing([1, 4, 3]))                  // 2
console.log(missing([2, 3, 4]))                  // 1
console.log(missing([5, 1, 4, 2]))               // 3
console.log(missing([1, 2, 3, 4]))               // undefined