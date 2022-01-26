const pet = {
  type: "pig",
  colour: "#ff0000",
  age: 0,
  isFriendly: true,
  name: "Benny",
};

// 1.select header h4

const heading = document.querySelector("h4");

// 2.select the .age class

const age = document.querySelector(".age");

// 3.select .friendly class

const friendly = document.querySelector(".friendly");

// 4.change the innerHTML of each of them with data from the object

heading.innerHTML = pet.type;
age.innerHTML = pet.age;

let friend;

if (pet.isFriendly === true) {
  friend = "This pet is friendly";
} else friend = "This pet is not friendly";

friendly.innerHTML = pet.isFriendly
  ? "This pet is soooo friendly" // this is if the condition is true. Called ternary operator ? :
  : "This pet is not friendly"; // this is if the condition is false.
