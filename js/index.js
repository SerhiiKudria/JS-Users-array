//1.1 Для
function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

/*прописати метод getFullName() (повертає рядок з повним ім'ям) 
для користувача. 
Загальну логіку (тобто зазначений метод) винести на прототип.*/
User.prototype.getFullName = function () {
  return `${this.firstName} + ${this.lastName}`;
};
console.log("users.pop().getFullName()", users.pop().getFullName());
//1.2 Отримати масив повних імен осіб жіночої статі шкільного віку (6 – 18 років).
const girls = users.filter(function isGirl(item) {
  return !item.isMale && item.age >= 6 && item.age <= 18;
});
console.log("girls", girls);
//1.3 Видалити з масиву користувача з email useremail5@gmail.com
//Can be few emails useremail5@gmail.com
const wrongEmail = users.filter(function isWrongEmail(item) {
  return item.email === "useremail5@gmail.com";
});
wrongEmail.forEach((element) => {
  users.splice(users.indexOf(element), 1);
});
console.log("users", users);
//1.4 Перевірити, чи є серед користувачів користувач з email`ом
//useremail99@gmail.com
//Can be few emails useremail99@gmail.com
const email99 = users.filter(function isEmail99(item) {
  return item.email === "useremail98@gmail.com";
});
console.log("email99", email99);
console.log("is email99 exist", email99.length > 0);
//1.5 Перевірити, чи всі користувачі підписані (subscribed).
const isSubscribed = users.filter(function isSubscribed(item) {
  return item.isSubscribed;
});
console.log("isSubscribed", isSubscribed);
console.log("all is subscribed", isSubscribed.length == users.length);
