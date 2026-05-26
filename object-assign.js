let obj1 = {
    name : "prasanth",
    rollno : 80,
    value : 50
}

let obj2 = {
    name : "Vennila",
    rollno : 90
}

let obj = Object.assign(obj1, obj2)

console.log(obj)

// In Object assign have an one target and multiple source 
// In Object assign used to clone the object keys to new object or empty
// In Object assign same key present in source and target remains the traget key

let obj3 = Object.assign({}, obj2)

console.log(obj3)
