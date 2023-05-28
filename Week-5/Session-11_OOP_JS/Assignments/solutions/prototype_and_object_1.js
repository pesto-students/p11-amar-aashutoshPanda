const person = {
  _name: "John",
  _age: null,
  _email: "john@example.com",

  get name() {
    return this._name;
  },

  get email() {
    return this._email;
  },

  getAge() {
    return this._age;
  },

  setAge(age) {
    this._age = age;
  },
};

console.log(person.name); // Output: John
console.log(person.email); // Output: john@example.com

person.setAge(35); // Update the age property using the setAge() method
console.log(person.getAge()); // Output: 35
