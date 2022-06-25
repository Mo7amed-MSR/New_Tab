// start var
let clockBar = document.querySelector(`.clock-bar`)
let timeDiv = document.querySelector(`.clock-bar h1`)
let dayDiv = document.querySelector(`.clock-bar h3`)
let dateDiv = document.querySelector(`.clock-bar h2`)

let data = Date();
let timeData = data.slice(16 , 21);
let dayData = data.slice(0 , 3).toUpperCase();
let dateData = `${data.slice(11 , 15)}-${data.slice(4 , 7).toUpperCase()}-${data.slice(8 , 10)}`;
// end var

timeDiv.innerHTML = timeData;
dayDiv.innerHTML = dayData;
dateDiv.innerHTML = dateData;
