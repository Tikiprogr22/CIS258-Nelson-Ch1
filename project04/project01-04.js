/*  JavaScript 7th Edition
    Chapter 1
    Hands-On Project 1-4

    Author: LaTysha Turner
    Date:   06/16/2024

    Filename: project01-04.js
*/

// Define variables for home and work addresses
var homeStreet = "1 Main St."
var homeCity = "Sicilia"
var homeState = "MA"
var homeCode = "02103"
var workStreet = "15 Oak Ln."
var workCity = "Central City"
var workState = "MA"
var workCode = "02104"

// Functions to set the values of the input fields to the respective variables
function setHomeAddress() {
    document.getElementById("street").value = homeStreet;
    document.getElementById("city").value = homeCity;
    document.getElementById("state").value = homeState;
    document.getElementById("code").value = homeCode; 
}
function setWorkAddress() {
    document.getElementById("street").value = workStreet;
    document.getElementById("city").value = workCity;
    document.getElementById("state").value = workState;
    document.getElementById("code").value = workCode;
}