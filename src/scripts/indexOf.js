function indexOf(arr, el) {
    var rez = arr.findIndex(function(elem, i) {
        if (elem === el) {
            var index = i
        }
        return index >= 0
    })
    return rez
}

console.log('indexOf')
console.log(indexOf([1, 2, 3], 1))               // 0
console.log(indexOf([1, 2, 3], 4))               // -1