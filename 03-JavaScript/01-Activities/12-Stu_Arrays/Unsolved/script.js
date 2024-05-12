// WRITE YOUR CODE HERE
studentNames = ['Tavia', 'Esther', 'Henrietta', 'Silas']

console.log(studentNames)

console.log(`Welcome to the class, ${studentNames[0]}`)
console.log(`Welcome to the class, ${studentNames[1]}`)
console.log(`Welcome to the class, ${studentNames[2]}`)
console.log(`Welcome to the class, ${studentNames[3]}`)

studentNames[0] = 'Ikus'

if (studentNames[0] !== 'Tavia') {
    console.log(studentNames[0] + ' has joined the class.')
}