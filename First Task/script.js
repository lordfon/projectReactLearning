"use stict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms() {
    let i = 0;
    while (i < 3) {
        let a = prompt("Один из последних просмотренных фильмов?"),
            b = prompt("На сколько оцените его?");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a]=b;
            console.log("well done!");        
        } else {
            console.log("error");
            i--;
        }

        i++;
    }
}

rememberMyFilms();

if (personalMovieDB.count < 10) {
    alert("Low number of films has been watched");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель");    
} else if (personalMovieDB.count > 30) {
    alert("You are filmlover!");     
} else {
    alert("Error happened");        
}

console.log(personalMovieDB.movies);

console.log("5"+5);