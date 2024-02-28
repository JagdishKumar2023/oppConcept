// const user1 = {
//   firstName: "Anurag",
//   lastName: "Singh",
//   age: 25,
//   getAgeYear: function () {
//     return new Date().getFullYear() - user1.age;
//   },
// };

// const user2 = {
//   firstName: "Jagdish",
//   lastName: "Singh",
//   age: 23,
//   getAgeYear: function () {
//     return new Date().getFullYear() - user2.age;
//   },
// };

// function getBirthYear() {
//   //   console.log(this);
//   return new Date().getFullYear() - this.age;
// }

// function createUser(firstName, lastName, age) {
//   const user = {
//     firstName,
//     lastName,
//     age,
//     getBirthYear: createUser.commonMethods.getBirthYear,
//   };
//   return user;
// }

// createUser.commonMethods = {
//   getBirthYear() {
//     return new Date().getFullYear() - this.age;
//   },
// };

// function sayHii() {
//   console.log("hiii");
//   return "My name is jagdish kumar singh ";
// }

function CreateUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastNameName = lastName;
  this.age = age;
}

CreateUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

CreateUser.prototype.getFullYear = function () {
  return this.firstName + " " + this.lastName;
};

const user1 = new CreateUser("Aman", "Mishra", 32);
const user2 = new CreateUser("Rupali", "Singh", 22);
