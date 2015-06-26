function letterCount(str){
    return (str || '').replace(/[^a-z]/ig, '').split('').reduce(function(a, v, i, arr) {
        a[v] = (a[v]) ? a[v]+1 : 1
        return a
    }, {})
}

// tests

console.assert(letterCount("abcabcabcdefab c a oo ija ;a ;skmdals kn").b === 4)
console.assert(letterCount().z === undefined)