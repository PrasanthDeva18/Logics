const studentObj = {
    name : 'prasanth',
    rollno : '80',
    classStu : 'b'
}
console.log(studentObj.name)
console.log(studentObj["name"])

//destructuring
const { name, rollno } = studentObj

console.log(name, rollno);
