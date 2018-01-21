function reverse(str) {
    var newStr = ''
    for (var i = str.length; i >= 0; i--) {
        newStr += str.slice(i,i+1)
    }
    return newStr
}

console.log('reverse')
console.log(reverse(''))                         // ''
console.log(reverse('abcdef'))                   // 'fedcba'