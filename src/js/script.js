"use strict";
let number0fFilmes;
// Функция узнает количество просмотренных фильмов.
function start() {
    number0fFilmes = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    // isNan - проверяет, что пользователь ввел число. Не должно быть True;
    while (number0fFilmes == '' || number0fFilmes == null || isNaN(number0fFilmes)) {
        number0fFilmes = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}
// Вызов функции;
start();
// База данных.
const personalMovieDB = {
    count: number0fFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// Спрашивает последний фильм и его оценку.
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько вы его оцените?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}
rememberMyFilms();
// Определяет уровень киноманства.
function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}
detectPersonalLevel();
// Проверяет приватная ли база данных.
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}
// Функция спрашивает про жанры и записывает их в базу.
function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}?`);
        personalMovieDB.genres.push(genre);
    }
}
writeYourGenres();
console.log(personalMovieDB);