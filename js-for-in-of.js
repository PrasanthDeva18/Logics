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


// O/p
vennila
[ 'address', 'no 14, Javuli nagar,' ]
[ 'gender', 'F' ]
20
[ 'address', 'no 14, Javuli nagar,' ]
[ 'gender', 'F' ]
expected o/p 
 {
  name: 'vennila',
  empId: 20,
  address: 'no 14, Javuli nagar,',
  gender: 'F'
} 
 [
  [ '0', [ 'address', 'no 14, Javuli nagar,' ] ],
  [ '1', [ 'gender', 'F' ] ]
]
