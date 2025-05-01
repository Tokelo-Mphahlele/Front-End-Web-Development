// --- Students array ---
const electiveOne = { courseCode: 'ELEN4010', yearOffered: 4 }
const electiveTwo = { courseCode: 'ELEN4001', yearOffered: 4 }
const electiveThree = { courseCode: 'ELEN4020', yearOffered: 4 }
const electiveFour = { courseCode: 'ELEN4017', yearOffered: 4 }

const students = [
  { name: 'Kwezi', studentNumber: 453528, yearOfStudy: 4, electives: [electiveOne, electiveTwo, electiveThree] },
  { name: 'Pieter', studentNumber: 454345, yearOfStudy: 3, electives: [electiveOne, electiveTwo, electiveFour] },
  { name: 'Jade', studentNumber: 678345, yearOfStudy: 4, electives: [electiveTwo, electiveThree, electiveFour] },
  { name: 'Kiren', studentNumber: 567893, yearOfStudy: 4, electives: [electiveOne, electiveTwo, electiveThree] }
]

// --- DOM references ---
const showButton = document.getElementById('showButton')
const studentsDiv = document.getElementById('students')
const searchText = document.getElementById('search-text')
const filterType = document.getElementById('filter-type')

// --- Render student list ---
function renderStudents (filter = '', property = 'name') {
  studentsDiv.innerHTML = '' // Clear previous list

  const filteredStudents = students.filter((student) => {
    const searchLower = filter.toLowerCase()
    const studentValue = student[property].toString().toLowerCase()
    return studentValue.includes(searchLower)
  })

  filteredStudents.forEach((student, index) => {
    const studentDiv = document.createElement('div')
    studentDiv.classList.add('student')

    const info = document.createElement('p')
    info.textContent = `${student.name} (Student No: ${student.studentNumber}, Year: ${student.yearOfStudy})`
    studentDiv.appendChild(info)

    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.addEventListener('click', () => editStudent(index))
    studentDiv.appendChild(editButton)

    studentsDiv.appendChild(studentDiv)
  })

  if (filteredStudents.length > 0) {
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete List'
    deleteButton.id = 'deleteButton'
    deleteButton.addEventListener('click', deleteList)
    studentsDiv.appendChild(deleteButton)
  }
}

// --- Show All Students button event ---
showButton.addEventListener('click', function () {
  renderStudents()
})

// --- Search input event ---
searchText.addEventListener('input', function (e) {
  const filter = e.target.value
  const property = filterType.value
  renderStudents(filter, property)
})

// --- Edit student details ---
function editStudent (index) {
  const newName = prompt('Enter new name for the student:', students[index].name)
  if (newName !== null && newName.trim() !== '') {
    students[index].name = newName.trim()
    renderStudents(searchText.value, filterType.value)
  }
}

// --- Delete the student list ---
function deleteList () {
  studentsDiv.innerHTML = ''
}
