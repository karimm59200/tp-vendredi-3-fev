// console.log("coucou")
import Dog from "./classes/Dog.js";
let dog1 = new Dog("chiwawa", "bibiche", "./images/blue-nose-pitbull-5.jpg", 5);
let dog2 = new Dog("pit-bull", "rosco", "./images/HD-wallpaper-pitbull-pitbull-pit-dogs-thumbnail.jpg", 6);
let dog3 = new Dog("pit-bull", "Minouche", "./images/imagesWhite_Pitbull.jpg", 4);
// console.log(dog1);
// console.log(dog2);
// console.log(dog3);
let dogs = [];
dogs.push(dog1, dog2, dog3);
// console.log(dogs);
let btnA = document.querySelector("#btnA");
let btnB = document.querySelector("#btnB");
let btnC = document.querySelector("#btnC");
let btnLeft = document.getElementById("btn-left");
let btnRight = document.getElementById("btn-right");
let display = document.getElementById("display");
let imgDog = document.querySelector("imgDog");
// let img = document.createElement("img") as HTMLImageElement;
let img = document.querySelector("#monImage");
let divs = document.querySelector("div");
console.log(divs);
// console.log(imgDog)
const refresh = () => {
    //  display.innerHTML = "";
    //  imgDog.innerHTML= "";
};
btnA.addEventListener("click", () => {
    refresh();
    console.log("coucou A");
    display.innerHTML = `<h3>${dogs[0].breed} <b>${dogs[0].name}</b>
                            ${dogs[0].age} ans </h3><br><br> `;
    img.src = "./images/blueNosePitbull5.jpg";
    img.alt = "un chien";
    //  imgDog.appendChild(img);
    console.log(img);
});
btnB.addEventListener("click", () => {
    refresh();
    console.log("coucou B");
    display.innerHTML = `<h3>${dogs[1].breed} <b>${dogs[1].name}</b>
  ${dogs[1].age} ans</h3> <br><br> `;
    img.src = "./images/HD-wallpaper-pitbull-pitbull-pit-dogs-thumbnail.jpg";
    img.alt = "chien2";
    console.log(img);
});
btnC.addEventListener("click", () => {
    refresh();
    console.log("coucou C");
    display.innerHTML = `<h3>${dogs[2].breed} <b>${dogs[2].name}</b>
  ${dogs[2].age} ans</h3> <br><br> `;
    img.src = "./images/White_Pitbull.jpg";
    img.alt = "chien3";
    console.log(img);
});
btnLeft.addEventListener("click", () => {
    console.log("coucou left");
    refresh();
    console.log("coucou A");
    display.innerHTML = `<h3>${dogs[0].breed} <b>${dogs[0].name}</b>
                            ${dogs[0].age} ans </h3><br><br> `;
    img.src = "./images/blueNosePitbull5.jpg";
    img.alt = "un chien";
    //  imgDog.appendChild(img);
    console.log(img);
});
btnRight.addEventListener("click", () => {
    console.log("coucou right");
    refresh();
    console.log("coucou A");
    display.innerHTML = `<h3>${dogs[2].breed} <b>${dogs[2].name}</b>
                            ${dogs[2].age} ans </h3><br><br> `;
    // img.src=`./images/imagesWhite_Pitbull.jpg`;
    img.src = "./images/White_Pitbull.jpg";
    img.alt = "un chien";
});
// display.innerHTML = "";
for (const dog of dogs) {
    display.innerHTML = `${dog.breed} <b>${dog.name}</b>
                            ${dog.age} ans <br><br> `;
    imgDog.innerHTML = `${dog.image}`;
    // console.log(dogs[0]);
}
