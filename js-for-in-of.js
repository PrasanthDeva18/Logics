let obj = {
    name : 'vennila',
    empId: 20,
}

let arr = [['address', 'no 14, Javuli nagar,'], ['gender', 'F']]


let objectE = Object.entries(arr)

for(let i in obj) {
    console.log(obj[i])
    for(let a of arr) {
        console.log(a)
        obj[a[0]] = a[1]
    }
}

console.log("expected o/p \n", obj , "\n", objectE)
