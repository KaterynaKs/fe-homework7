const allStudents = [];

const studentForm = document.querySelector('.input');
const studentsContainer = document.querySelector('.students_container');

studentForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const firstname = e.target.first.value;
    const lastname = e.target.last.value;
    const age = parseInt(e.target.age.value);

    const student = {
        firstname,
        lastname,
        age,
    };

    allStudents.push(student);
    renderStudents(allStudents);
    studentForm.reset();
});


function renderStudents(students) {
    studentsContainer.innerHTML = '';

    students.forEach((student) => {
        const studentCard = document.createElement('div');
        studentCard.classList.add('student-card');
        
        if (student.age < 18) {
            studentCard.classList.add('young');
        }
        
        studentCard.innerHTML = `
            <p><strong>Имя:</strong> ${student.firstname}</p>
            <p><strong>Фамилия:</strong> ${student.lastname}</p>
            <p><strong>Возраст:</strong> ${student.age}</p>
        `;

        studentsContainer.appendChild(studentCard);
    });
}