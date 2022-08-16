const api = "api_key=c1c4be5f30877a2e483c03266ca8f936";

const base_url = "https://api.themoviedb.org/3";

const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;

const img_url = "https://image.tmdb.org/t/p/original";



// requests for movies data 

const requests = {
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
};






fetch(requests.fetchNetflixOrignals)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.results);

    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
    console.log(setMovie);
    var banner = document.getElementById("container");
    var banner_title = document.getElementById("title");
    banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";

    banner_title.innerText = setMovie.name;
  })





fetch(requests.fetchActionMovies)
  .then((res) => res.json())
  .then((data) => {
    const carousel = document.getElementById("carousel");
    const row = document.createElement("div");
    row.className = "carousel-list";
    carousel.appendChild(row);
    const title = document.createElement("h2");
    title.className = "title";

    title.innerText = "Action Movies";
    row.appendChild(title);
    const row_movies = document.createElement("div");
    row_movies.className = "carousel-item";
    row.appendChild(row_movies);
    data.results.forEach(movie => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__movies";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_movies.appendChild(poster);

    });
  });

fetch(requests.fetchHorrorMovies)
  .then((res) => res.json())
  .then((data) => {
    const carousel = document.getElementById("carousel");
    const row = document.createElement("div");
    row.className = "carousel-list";
    carousel.appendChild(row);
    const title = document.createElement("h2");
    title.className = "title";

    title.innerText = "Horror Movies";


    row.appendChild(title);
    const row_movies = document.createElement("div");
    row_movies.className = "carousel-item";
    row.appendChild(row_movies);
    data.results.forEach(movie => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__movies";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_movies.appendChild(poster);

    });
  });


fetch(requests.fetchComedyMovies)
  .then((res) => res.json())
  .then((data) => {
    const carousel = document.getElementById("carousel");
    const row = document.createElement("div");
    row.className = "carousel-list";
    carousel.appendChild(row);
    const title = document.createElement("h2");
    title.className = "title";

    title.innerText = "Comedy Movies";


    row.appendChild(title);
    const row_movies = document.createElement("div");
    row_movies.className = "carousel-item";
    row.appendChild(row_movies);
    data.results.forEach(movie => {
      console.log(movie);
      const poster = document.createElement("img");
      poster.className = "row__movies";
      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_url + movie.backdrop_path;
      row_movies.appendChild(poster);

    });
  });





