function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.print = function() {
    console.log(this.lastName + ", " + this.firstName);
};

module.exports = Person;