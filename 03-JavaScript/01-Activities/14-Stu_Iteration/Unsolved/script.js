// WRITE YOUR CODE BELOW
const goodStudents=['Jeremy', 'Candace', 'Phineas', 'Ferb', 'Baljeet', 'Buford', 'Isabella', 'Stacy']
const badStudents=['Kenan', 'Lily', 'Micah', 'Drake', 'Ross' 
]

const totalStudents = goodStudents.length + badStudents.length

console.log(`There are ${totalStudents} students in this class.`)

for (let i=0; i < badStudents.length; i++) {
    console.log(`I'm... somewhat iffy about seeing you again, ${badStudents[i]}`)
}

for (student of goodStudents) {
    console.log(`Great to see you, ${student}`)
}
