let obj2 = {
    name : "Vennila",
    rollno : 90
}

Object.freeze(obj2)

obj2.rollno = 100

console.log(obj2)

// O/P - { name: 'Vennila', rollno: 90 }
