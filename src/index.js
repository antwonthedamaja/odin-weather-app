import { handleSearchAsync } from "./api.js";
import { screenPopulate } from "./page.js";
import "./style.css";

const submit = document.querySelector('#submit');

submit.addEventListener('click', async() => {
    let weather = await handleSearchAsync();
    screenPopulate(weather);
});