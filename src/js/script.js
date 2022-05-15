const number0fFilmes = +prompt('Сколько фильмов Вы уже посмотрели?', '');
// Поставили унарный плюс перед prompt, чтобы преобразовать ответ из строки в число;
const personalMovieDB = {
    count: number0fFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''), 
      b = prompt('На сколько вы его оцените?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько вы его оцените?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
