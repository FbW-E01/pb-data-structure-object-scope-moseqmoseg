const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    print: function() {
        console.log(
            `${this.firstName} ${this.lastName} is a student in class ${this.class}`
        );
    },
};

student.print();

// console.log(result1);

const person = {
    firstName: "Jose",
    lastName: "Ortiz",
    age: 19,
    city: "San Antonio",
    job: "engineer",
    print2: function() {
        console.log(
            `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} living in ${this.city}`
        );
    }
};

person.print2();

const size = Object.keys(person).length;

console.log(size);