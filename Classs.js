class CreateUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullYear() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new CreateUser("Aman", "Mishra", 40);
const user2 = new CreateUser("Jagdish", "singh", 23);
