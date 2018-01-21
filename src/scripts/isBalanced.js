function isBalanced(str) {
    var n = 0
    var j = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '{') n++
        if (str[i] === '}') j++
    }
    if (str.indexOf('{') < str.indexOf('}') && n === j && str.indexOf('{}')) {
        return true
    }
    return false
}

console.log('isBalanced')
console.log(isBalanced('}{'))                      // false
console.log(isBalanced('{{}'))                     // false
console.log(isBalanced('{}{}'))                    // false
console.log(isBalanced('foo { bar { baz } boo }')) // true
console.log(isBalanced('foo { bar { baz }'))       // false
console.log(isBalanced('foo { bar } }'))           // false