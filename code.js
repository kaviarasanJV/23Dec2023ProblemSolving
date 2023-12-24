///Do the below programs in anonymous function & IIFE
const log = (value) => console.log(value);
log("kaviarasan JV");
log(
  `For the given JSON iterate  between  window, screen, and document in javascript`
);
/////////////////////////////////////////////////////////////////////////////////////
///For the given JSON iterate  between  window, screen, and document in javascript
/////////////////////////////////////////////////////////////////////////////////////
const jsondata = [
  {
    name: "kavi",
    city: "delhi",
  },
  {
    name: "eswar",
    city: "chennai",
  },
  {
    name: "hari",
    city: "bangalore",
  },
  {
    name: "saravannan",
    city: "madurai",
  },
];
/////////////////////for loop
log("for loop");
for (i = 0; i < jsondata.length; i++) {
  console.log(jsondata[i].name, jsondata[i].city);
}
/////////////////////for in loop
log("for in loop");
for (let x in jsondata) {
  console.log(jsondata[x]);
}
//////////////////////////for of loop
log("for of loop");
for (let y of jsondata) {
  console.log(y.name, y.city);
}
///////////////////////////////////
log("forEach loop");
jsondata.forEach((object) => {
  console.log(object);
});

///////////////////////////////RESUME JSON FORMAT/////////////////////
let resumeformatdata = [
  {
    name: "kaviarasanjv",
    worklocation: "Bangalore",
    position: "developer",
  },
];
