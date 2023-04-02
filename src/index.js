import { handleSearchAsync } from "./api.js";
// import { screenPopulate } from "./page.js";
import "./style.css";

const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    let weather = handleSearchAsync();
    console.log(weather);
    // screenPopulate(weather);
});