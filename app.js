alert("Assalomu alaykum saytimizga kirishingizdan oldin savollarga javob bersangiz!");
var username = prompt("Ismingizni kiriting");
console.log("Ismi:" + username);
var usersname = prompt("Familiyangizni kiriting");
console.log("Familiyasi:" + username);
var userage = prompt("Yoshingizni kiriting");
console.log("Yoshi:" + userage);
var userjob = prompt("Kasbingizni kiriting");
console.log("Kasbi:" + userjob);
alert("Javob berganiz uchun raxmat!");
var user = {
  name: username,
  sname: usersname,
  age: userage,
  job: userjob,
};
var use = {
  add: "Saytimizga tashrif buyurganiz uchun raxmat 😊 ",
};
console.log(user);
document.querySelector(".nameh2").innerText = user["name"];
document.querySelector(".snameh2").innerText = user["sname"];
document.querySelector(".ageh2").innerText = user["age"];
document.querySelector(".jobh2").innerText = user["job"];
document.querySelector(".addd").innerText = use["add"];