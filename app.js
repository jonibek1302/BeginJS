var username = prompt("Ismingizni kiriting");
console.log('Ismi:' + username);
var userage = prompt("Yoshingizni kiriting");
console.log("Yoshi" + userage);
var userjob = prompt("Kasbingizni kiriting");
console.log("Kasbi:" + userjob);
alert("Javob berganiz uchun raxmat!")
var user = {
    name:username,
    age:userage,
    job:userjob,

}
var use = {
    add: "Yaxshi inson 😊 "
}
 console.log(user);
document.querySelector(".nameh2").innerText = user["name"];
document.querySelector(".ageh2").innerText = user["age"];
document.querySelector(".jobh2").innerText = user["job"];
document.querySelector(".addd").innerText = use["add"];