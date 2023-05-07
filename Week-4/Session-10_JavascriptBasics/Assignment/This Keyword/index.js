class Person {
  constructor(name, age, gender, nationality) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
  }

  introduce() {
    return `My name is ${this.name}. I'm ${this.age} years old, ${this.gender}, and ${this.nationality}.`;
  }
}

class Student extends Person {
  constructor(name, age, gender, nationality, subject) {
    super(name, age, gender, nationality);
    this.subject = subject;
  }

  study() {
    return `I'm currently studying ${this.subject}.`;
  }
}

// Create three instances of the Person class
const person1 = new Person("John", 30, "male", "American");
const person2 = new Person("Jane", 25, "female", "Canadian");
const person3 = new Person("Bob", 40, "male", "British");

// Call the introduce method on each instance and print the returned string to the console
console.log(person1.introduce()); // My name is John. I'm 30 years old, male, and American.
console.log(person2.introduce()); // My name is Jane. I'm 25 years old, female, and Canadian.
console.log(person3.introduce()); // My name is Bob. I'm 40 years old, male, and British.

// Create an instance of the Student class
const student1 = new Student(
  "Alice",
  20,
  "female",
  "Australian",
  "Computer Science"
);

// Call the introduce method on the Student instance and print the returned string to the console
console.log(student1.introduce()); // My name is Alice. I'm 20 years old, female, and Australian.

// Call the study method on the Student instance and print the returned string to the console
console.log(student1.study()); // I'm currently studying Computer Science.
