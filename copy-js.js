// In primitive datatypes value will be all seprate memory location for each variable declaration it is always deep copy

let num1 = 10;
let num2 = num1;
console.log(num1);
num1 = 20
console.log(num1);
console.log(num2);


// in reference datatype copy the value from one var to another var it will shallow copy pointing to the same reference

let a = [1,2,4]
let b = a 

console.log(a)
console.log(b)
a.push(5)

console.log()

console.log(a)
console.log(b) 

//O/P show same a as b as well due to pointing to same reference 

// [ 1, 2, 4 ]
// [ 1, 2, 4 ]

// [ 1, 2, 4, 5 ]
// [ 1, 2, 4, 5 ]


// Overcome

// using spread operator, json. stringify or parse

b = JSON.parse(JSON.stringify(a))

a.push(10)
console.log(a)
console.log(b)


//O/P
[ 1, 2, 4, 5, 10 ]
[ 1, 2, 4, 5 ]

// USING SPREAD
b = [...a]

a.push(10)

console.log()
console.log(a)
console.log(b)

// Using Spread Operator
// [ 1, 2, 4, 5, 10 ]
// [ 1, 2, 4, 5 ]


// Object -  ASSIGN, SPREAD OPERATOR, JSON

let stuDetail1 = { name : "prasanth", "roll no" : 80 };
let stuDetail2  = stuDetail1;

stuDetail1.name = "vennial"

console.log(stuDetail1)
console.log(stuDetail2)

// O/P
// { name: 'vennial', 'roll no': 80 }
// { name: 'vennial', 'roll no': 80 }

stuDetail2 = JSON.parse(JSON.stringify(stuDetail1))

stuDetail1.name = "prasanth"

console.log(stuDetail1)
console.log(stuDetail2)

//OP
// { name: 'prasanth', 'roll no': 80 }
// { name: 'vennial', 'roll no': 80 }


stuDetail2 = {...stuDetail1}

stuDetail1.name = "prasanth"

console.log(stuDetail1)
console.log(stuDetail2)

//OP
// { name: 'prasanth', 'roll no': 80 }
// { name: 'vennial', 'roll no': 80 }

stuDetail2 = Object.assign({}, stuDetail1)

stuDetail1.name = "prasanth"

console.log(stuDetail1)
console.log(stuDetail2)

//OP
// { name: 'prasanth', 'roll no': 80 }
// { name: 'vennial', 'roll no': 80 }


// but the complexity in spread and rest operator nested items are work as shallow copy example nested object and nested array overcome with this


let a1 = { 
  name : "temp",
  role : {
    data : [1,2,3]
  }
}

let b1 = a1

console.log(a1)
console.log(b1)

a1.role.data.push(5)

console.log("problem here")
console.log(a1)
console.log(b1)

{ name: 'temp', role: { data: [ 1, 2, 3 ] } }
{ name: 'temp', role: { data: [ 1, 2, 3 ] } }

{ name: 'temp', role: { data: [ 1, 2, 3, 5 ] } }
{ name: 'temp', role: { data: [ 1, 2, 3, 5 ] } }

// using spread to overcome how easisest way is json only but will try this

  
b1 = { ...a1, role : { data : [ ...a1.role.data ]  } }


a1.role.data.push(5)

console.log()
console.log(a1)
console.log(b1)
