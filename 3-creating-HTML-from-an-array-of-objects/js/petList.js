const pets = [
  {
    type: null,
    colour: 'brown',
    age: 10,
    friendly: true,
  },
  {
    colour: 'orange',
    age: 7,
    friendly: false,
  },
  {
    type: 'Duck',
    colour: '#00ff00',
    age: 20,
    friendly: false,
  },
];

const container = document.querySelector('.pet-container');

// Select the pet-container class

// Create a html variable to hold our htm in it when we use the loop
let html = '';
// Loop over the array

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
  let theType = '';
  // same as if(pets[i].type !== null)
  if (pets[i].type) {
    theType = pets[i].type;
  } else {
    theType = 'Unknown Type';
  }
  html =
    html +
    `<div>
    <h4>${theType}</h4>
    <p><b>The age:</b> ${pets[i].age}</p>
    <p><b>Friendly:</b> ${
      pets[i].friendly ? 'Yes it is friendly' : 'No, it is not friendly'
    }</p>
    </div>
   `;
  console.log(html);
}

container.innerHTML = html;

// change the innerHTML
