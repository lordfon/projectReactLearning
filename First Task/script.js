"use stict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        while (personalMovieDB.count == "" ||personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
           personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
    rememberMyFilms: function (){
        for (let i = 0; i < 3; i++) {
            let a = prompt("Один из последних просмотренных фильмов?"),
                b = prompt("На сколько оцените его?");
            if (a != null && b != null && a != "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("well done!");
            } else {
                console.log("error");
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert("Low number of films has been watched");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("You are filmlover!");
        } else {
            alert("Error happened");
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i <= 2; i++) {
            while (personalMovieDB.genres[i] == "" ||personalMovieDB.genres[i] == null ) {
                personalMovieDB.genres[i] = prompt(`Your favourite genre # ${[i+1]} `);
             }
        }
        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Favourite genre #${index + 1} is ${value}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else if (personalMovieDB.privat == true) {
            personalMovieDB.privat = false;
        }
    }

};


personalMovieDB.writeYourGenres();
