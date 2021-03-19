"use stict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

let i = 0;

// do {
//     const a = prompt("Один из последних просмотренных фильмов?"),
//         b = prompt("На сколько оцените его?");
//     personalMovieDB.movies[a]=b;
//     i++;
// } while (i < 2);

// i = 0;

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

// for (let j = 0; j < 3; j++ ) {
//     let a = prompt("Один из последних просмотренных фильмов?"),
//         b = prompt("На сколько оцените его?");
//     personalMovieDB.movies[a]=b;
// }

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