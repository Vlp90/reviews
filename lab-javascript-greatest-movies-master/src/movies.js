const moviesData = require("./data.js");

// console.log(moviesData);

// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (array) => {
  const result = array.map((movie) => {
    return movie.director;
  });

  console.log(result);
};

// getAllDirectors(moviesData);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array, nameDirector, genre) {
  return array.filter(
    (movie) =>
      movie.director === nameDirector && movie.genre.indexOf(genre) !== -1
  ).length;
}

console.log(howManyMovies(moviesData, "Steven Spielberg", "Drama"));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (array) => {
  const allmovieRate = array.map((movie) => {
    return movie.rate;
  });
  //   console.log(allmovieRate);

  const sum = allmovieRate.reduce((a, b) => a + b, 0);
  const averageMovieRate = (sum / allmovieRate.length).toFixed(2);

  console.log(averageMovieRate);
};

ratesAverage(moviesData);

// Iteration 4: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (array, genre) => {
  const allMovieDrama = array.filter(
    (movie) => movie.genre.indexOf(genre) === 0
  );
  //   return allMovieDrama;

  const allRateDrame = allMovieDrama.map((movie) => {
    return movie.rate;
  });

  //   return allRateDrame

  const sum = allRateDrame.reduce((a, b) => a + b, 0);
  const averageMovieRate = (sum / allRateDrame.length).toFixed(2);

  return averageMovieRate;
};

console.log(dramaMoviesRate(moviesData, "Comedy"));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (array) => {

function compare( a, b ) {
    if ( a.year < b.year ){
      return -1;
    }
    if ( a.year > b.year ){
      return 1;
    }
    return 0;
  }
  
  newArray = array.sort( compare );

return newArray
}

// console.log(orderByYear(moviesData))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (array) => {
    function compare( a, b ) {
        if ( a.title < b.title ){
          return -1;
        }
        if ( a.title > b.title ){
          return 1;
        }
        return 0;
      }
      
      newArray = array.sort(compare).slice(0, 20);
    
    console.log(newArray) 
}

orderAlphabetically(moviesData)

// exercice done