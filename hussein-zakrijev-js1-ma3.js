// Q1
const arrow = (a, b) => a - b;

// Q2

fetch ("https://api.rawg.io/api/games?genres=sports%22)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        for (let i = 0; i < json.results.length; i++) {
            console.log(json.results[i].name);
        }
    })

    .catch(() => document.location.href = "error.html");


// Q3
let replaceText = "These cats are outrageous.";
replaceText = replaceText.replace("cats", "giraffes");

// Q4 
const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let userID;

if (params.has("userId")) {
    userID = params.get("userId");
}

if(userID < 10){
    document.location.href = "first.html"
} else if (userID >= 10){
    document.location.href = "second.html";
} else{
    document.location.href = "third.html";
}

// Q5
const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);

// Q6

const animals = document.querySelector(".animals");
const cows = document.querySelector(".cows");

const listing = document.createElement("li");
listing.className = "parrots"
listing.innerText = "Parrots";

cows.after(listing);

// Q7

fetch("https://api.rawg.io/api/games/3801%22)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        const rating = document.querySelector(".rating");
        rating.appendChild(document.createTextNode(json.rating));
    })

    .catch(function (error) {
        console.log(error);
    });
