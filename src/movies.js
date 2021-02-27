// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    // map all directors' names
    const directors = movies.map((movie) => movie.director);
    return directors; //return directors' names
};
getAllDirectors(movies);


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    // filter movies that has Spielberg as director and Drama as genre
    const spielbergDramaMovies = movies.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")); 
    return spielbergDramaMovies.length; //return numbers of movies
};
howManyMovies(movies);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    //reduce function to calcuate the average rate
    const ratesAverage = movies.reduce((acc, movie) => {
        let movieRate = movie.rate || 0
        return Number((acc + movieRate/movies.length).toFixed(2)); 
    }, 0); 
    return ratesAverage;//return average rate result
};
ratesAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    //filter all drama movies
    const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
    // using ratesAverage function for calculating the rate average of the drama movies
    return ratesAverage(dramaMovies);
};
dramaMoviesRate(movies);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movie) {
    let copyMovies = movie.slice()
    const moviesByYear = copyMovies.sort(function(x, y) {
        //if year is the same,
        if (x.year === y.year) {
            return x.title - y.title; //order by title 
        } else {
            return x.year - y.year; //otherwise order by year
        }; 
    });
    return moviesByYear; //return new ordered movie array
};
orderByYear(movie);


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const movieTitles = movies.map((movie) => movie.title); //map all mive titles
    const moviesByTitle = movieTitles.sort(); //sort movie titles aphabetically
    //if there are more than 20 titles, slide the array
    if (movies.length > 20) {
        return moviesByTitle.slice(0, 20)
    }
    return moviesByTitle;
}
orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

}
turnHoursToMinutes(movies);


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {

};
bestYearAvg(movies);