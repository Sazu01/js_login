"use strict";

const heading = document.getElementsByTagName(`h1`);

const input_user = document.querySelector(`input[type="text"]`);
const input_pass = document.querySelector(`input[type="password"]`);

const btn = document.querySelector(`input[type="submit"]`);

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (input_user.value === "sazu" && input_pass.value === "1234"){
        alert("Successful")
    }else(
        alert("Failed")
    )
})