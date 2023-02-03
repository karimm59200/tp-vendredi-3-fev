// console.log("coucou")
import Dog from "./classes/Dog.js";
let dog1 = new Dog("chiwawa", "bibiche", "https://nosamisleschiens.fr/wp-content/uploads/2014/08/Chihuahua-scaled.jpeg", 5);
// console.log(dog1);
let dog2 = new Dog("pit-bull", "rosco", "https://www.rustica.fr/images/pitbull.png", 6);
// console.log(dog2);
let dogs = [];
dogs.push(dog1, dog2);
console.log(dogs);
let btnA = document.querySelector("#btnA");
let btnB = document.querySelector("#btnB");
let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");
let display = document.getElementById("display");
let imgDog = document.getElementById("imgDog");
// console.log(imgDog)
btnA.addEventListener('click', () => {
    console.log("coucou A");
});
btnB.addEventListener('click', () => {
    console.log("coucou B");
});
btnLeft.addEventListener('click', () => {
    console.log("coucou left");
});
btnRight.addEventListener('click', () => {
    console.log("coucou right");
});
for (const dog of dogs) {
    display.innerHTML += `${dog.breed} <b>${dog.name}</b>
                            ${dog.age} ans <br><br> `;
    imgDog.innerHTML = `${dog.image}`;
}