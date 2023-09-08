"use strict"

document.querySelector("#btn").addEventListener('click', convert)
// document.querySelector("input").addEventListener('click', acc)

function convert() {
const temp = document.querySelector('#inp').value
const convertedValue = temp * 9/5 + 32
// console.log(convertedValue)
document.querySelector('#talkout').innerText = convertedValue
}
