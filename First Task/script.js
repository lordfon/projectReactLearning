"use stict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

let lastWatched = prompt("Один из последних просмотренных фильмов?");
let lastWatchedScore = prompt("На сколько оцените его?");


personalMovieDB.movies[lastWatched]=lastWatchedScore;

console.log(personalMovieDB.movies);