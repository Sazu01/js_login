"use strict";

const input_user = document.querySelector(`input[type="text"]`);
const input_pass = document.querySelector(`input[type="password"]`);
const btn = document.querySelector(`input[type="submit"]`)

// input_user.value


const heading = document.getElementsByTagName("h1");

console.dir(input_user);
console.log(heading[0]);

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if(input_user.value === "user" && input_pass.value === "1234"){
        document.querySelector("div.thankyou").style.display = flex
    }
})
