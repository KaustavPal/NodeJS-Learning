const student = {
  id: 20,
  name: "Kaustav",
  age: 28,
  studentInfo() {
    return `Student ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`;
  },
};
console.log(student.studentInfo());
