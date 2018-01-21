function reverse(str) {
    var newStr = ''
    for (var i = str.length; i >= 0; i--) {
        newStr += str.slice(i, i + 1)
    }
    return newStr
}

console.log('reverse')
console.log(reverse(''))                         // ''
console.log(reverse('abcdef'))                   // 'fedcba'

function isPalindrome(str) {
    var newStr = str.toLowerCase().replace(/\s/g,'')
    var reverseStr = reverse(newStr)
    if (newStr === reverseStr) {
        return true
    }
    return false
}

console.log('isPalindrome')
console.log(isPalindrome(''))                                // true
console.log(isPalindrome('abcdcba'))                         // true
console.log(isPalindrome('abcd'))                            // false
console.log(isPalindrome('A man a plan a canal Panama'))     // true