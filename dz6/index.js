const students = [
    {
        id: 10,
        name: 'John Smith',
        marks: [10, 8, 6, "9", 8, 7],
    },
    {
        id: 11,
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        id: 12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        id: 13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];

function calculateStudentAverageMarks(marks) {
    return marks.reduce((acc, element) => {
        return acc += element;
    }, 0) / marks.length;
}

function getStudentsWithAverageMark(students) {
    return students.map((element) => {
        const average = calculateStudentAverageMarks(element.marks);

        console.log(`${element.name}: ${average}`)

        return {...element, average};
    });
}

function calculateGroupAverageMark(students) {
    const studentsAverages = students.map((element) => {
        return element.average;
    });

    return calculateStudentAverageMarks(studentsAverages);
}

console.log(calculateGroupAverageMark(getStudentsWithAverageMark(students)));
