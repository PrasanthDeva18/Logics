// Spread Operator
let a = [1,2,3,4]
let b = [4,5,6,7]

// merge two arrays and copy the elements to the new array
let c = [...a, ...b]
console.log(c)

//Array as argument using rest operator
function sum (a, b, c, d) {
    return  a + b + c + d
}

let total = sum(...a)

console.log(total)
