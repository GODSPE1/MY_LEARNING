import { fetchAPIData } from "../services/api.js";
import { searchAPIData } from "../services/api.js";
import { initSwiper } from "../main.js";
import { global } from "../config.js";

/**
 * ---------------------------------------------------------------------------
 * Display Popular Movies
 * ---------------------------------------------------------------------------
 * Fetches a list of currently popular movies from the TMDB API and renders
 * each movie as a card inside the `#popular-movies` DOM container. Each card
 * displays the movie's poster (or a fallback image), title, and release date,
 * and links to a detail page using the movie's unique `id`.
 *
 * Dependencies:
 *   - fetchAPIData(endpoint: string):
 *       A helper function that performs the HTTP request to the TMDB API and
 *       returns JSON data.
 *   - A DOM element with the ID `popular-movies` must exist on the page.   
 */


// Dispaly details of each movie
export async function displayMovieDetails() {
    const movieId = window.location.search.split('=')[1]
    console.log(movieId);

    const movieDetails = await fetchAPIData(`movie/${movieId}`);
    console.log(movieDetails);

  // Overlay background image
  displayBackgroundImage('movie', movieDetails.backdrop_path);


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="details-top">
        <div>
            ${
                movieDetails.poster_path ? `
                <img
                    src="https://image.tmdb.org/t/p/w500${movieDetails.poster_path}"
                    class="card-img-top"
                    alt="${movieDetails.title}"
                />
                ` 
                : `<img
                    src="../images/no-image.jpg"
                    class="card-img-top"
                    alt="${movieDetails.title}"
                />
                `   
            }
        </div>
          <div>
            <h2>${movieDetails.title}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${movieDetails.vote_average.toFixed(1)}
            </p>
            <p class="text-muted">Released on: ${movieDetails.release_date}</p>
            <p>${movieDetails.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${movieDetails.genres.map((genre) => `<li>${genre.name}</li>`).join(' ')}
            </ul>
            <a href="${movieDetails.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Movie Info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span>$${numberWithCommas(movieDetails.budget)}</li>
            <li><span class="text-secondary">Revenue:</span>$${numberWithCommas(movieDetails.revenue)}</li>
            <li><span class="text-secondary">Runtime:</span> ${movieDetails.runtime}</li>
            <li><span class="text-secondary">Stutus:</span> ${movieDetails.status}</li>
            <li><span class="text-secondary">Released Date:</span> ${
                new Date(movieDetails.release_date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            })}
            </li>

        </ul>

        <h4>Production Companies</h4>
        <div class="list-group">
          ${movieDetails.production_companies.map((company) => `<span>${company.name}</span>`).join('" "')}
        </div>
        </div>

        <h4> Production Countries</h4>
        <div classes='list-group'>${movieDetails.production_countries.map((country) => `<span>${country.name}</span>`).join('')}</div>
    `;  


    document.querySelector('#movie-details').appendChild(div);
}

// Display backdrop on details page
function displayBackgroundImage(type, backdrop_path) {
  const OverlayDiv = document.createElement('div');
  OverlayDiv.style.backgroundImage = `url(https:)`;
  OverlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${backdrop_path})`;
  OverlayDiv.style.backgroundSize = 'cover';
  OverlayDiv.style.backgroundPosition = 'fixed';
  OverlayDiv.style.backgroundRepeat = 'no-repeat';
  OverlayDiv.style.height = '100vh';
  OverlayDiv.style.width = '100vw';
  OverlayDiv.style.position = 'fixed';
  OverlayDiv.style.top = '0';
  OverlayDiv.style.left = '0';
  OverlayDiv.style.zIndex = '-1';
  OverlayDiv.style.opacity = '0.5';

  if (type === 'movie') {
    document.body.appendChild(OverlayDiv);
    

  } else {
    document.querySelector('#show-details').appendChild(OverlayDiv);
  }
}










/** * Fetches data from the TMDB (The Movie Database) API.
 * 
 * This function builds a request URL using a base API URL,
 * endpoint, and API key, then returns the response data.
 * 
 * @async
 * @function fetchAPIData
 * @param {string} endpoint - The specific API endpoint to fetch data from.
 * @returns {Promise<Object>} - The JSON response from the API.
 * 
 * @example
 * fetchAPIData('movie/popular')
 *      .then(data => console.log(data))
 *      .catch(error => console.log(error))
*/
export async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

    document.querySelector('#popular-movies').appendChild(div);
  });
}





/**
 * ---------------------------------------------------------------------------
 * Display Popular TV Shows
 * ---------------------------------------------------------------------------
 * Fetches a list of currently popular TV shows from the TMDB API and renders
 * each show as a card inside the `#popular-shows` DOM container. Each card
 * displays the show's poster (or a fallback image), name, and first-air date,
 * and links to a detail page using the show's unique `id`.
 *
 * Dependencies:
 *   - fetchAPIData(endpoint: string):
 *       A helper function that performs the HTTP request to the TMDB API and
 *       returns JSON data.
 *   - A DOM element with the ID `popular-shows` must exist on the page.
 *
 * Workflow:
 *   1. Request the "popular TV shows" dataset via the `tv/popular` endpoint.
 *   2. Extract the `results` array from the API response.
 *   3. Iterate through each show entry and:
 *        - Create a `.card` element.
 *        - Insert a poster image or a fallback image if none is available.
 *        - Display the show’s title (`name`) and release date (`first_air_date`).
 *        - Wrap the poster in a link to `tv-details.html` with the show's ID.
 *   4. Append each card to the `#popular-shows` container.
 *
 * Error Handling:
 *   - Assumes upstream error handling from `fetchAPIData`.
 *   - If no results are returned, the function quietly renders nothing.
 *
 * Side Effects:
 *   - Modifies the DOM by inserting new card elements.
 *   - Logs API responses for debugging (`console.log(tvresults)`).
 *
 * Example Usage:
 *   document.addEventListener('DOMContentLoaded', displayPopularShows);
 *
 * ---------------------------------------------------------------------------
 */
export async function displayPopularShows() {
    const { results: tvresults } = await fetchAPIData('tv/popular');
    console.log(tvresults);

    tvresults.forEach((show) => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML =  `
          <a href="tv-details.html?id=${show.id}">
           ${
            show.poster_path ? ` <img
              src="https://image.tmdb.org/t/p/w500${show.poster_path}"
              class="card-img-top"
              alt="${show.name}"
            />` : `
             <img
              src="../images/no-image.jpg"
              class="card-img-top"
              alt="${show.name}"
            />
            `
           }
          </a>
          <div class="card-body">
            <h5 class="card-title">${show.name}</h5>
            <p class="card-text">
              <small class="text-muted">Released on: ${show.first_air_date}</small>
            </p>
          </div>
        `;
        document.querySelector('#popular-shows').appendChild(div);
    });
}


/**
 * Display details of each TvShow
 * @function displayTvShowDetails
 * 
 */
export async function displayTvShowDetails() {
    const showId = window.location.search.split('=')[1]
    console.log(showId);

    const showDetails = await fetchAPIData(`tv/${showId}`);
    console.log(showDetails);

  // Overlay background image
  displayBackgroundImage('tv', showDetails.backdrop_path);


    const div = document.createElement('div');
    div.innerHTML = `
    <div class="details-top">
        <div>
            ${
                showDetails.poster_path ? `
                <img
                    src="https://image.tmdb.org/t/p/w500${showDetails.poster_path}"
                    class="card-img-top"
                    alt="${showDetails.name}"
                />
                ` 
                : `<img
                    src="../images/no-image.jpg"
                    class="card-img-top"
                    alt="${showDetails.name}"
                />
                `   
            }
        </div>
          <div>
            <h2>${showDetails.name}</h2>
           
            <p class="text-muted">Last Air Date: ${showDetails.last_air_date}</p>
            <p>${showDetails.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${showDetails.genres.map((genre) => `<li>${genre.name}</li>`).join(' ')}
            </ul>
            <a href="${showDetails.homepage}" target="_blank" class="btn">Visit Show Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li><span class="text-secondary">Number of Episodes:</span>&nbsp${showDetails.number_of_episodes ?? 'N/A'}</li>
            <li><span class="text-secondary">Season:</span>&nbsp${showDetails.number_of_seasons ?? 'N/A'}</li>
            <li><span class="text-secondary">Last Episode to air:</span>&nbsp${showDetails.last_episode_to_air?.name ?? 'N/A'}</li>
            <li><span class="text-secondary">Last Episode overview:</span>&nbsp${showDetails.last_episode_to_air?.overview ?? 'N/A'}</li>
            <li><span class="text-secondary">Next Episode overview:</span>&nbsp${showDetails.next_episode_to_air?.name ?? 'N/A'} ${showDetails.next_episode_to_air?.air_date ?? 'N/A'}</li>
            <li><span class="text-secondary">Stutus:</span> ${showDetails.status}</li>
            <li><span class="text-secondary">Released Date:</span>&nbsp${
                new Date(showDetails.first_air_date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            })}
            </li>

        </ul>

        <h4>Production Companies</h4>
        <div class="list-group">
          ${showDetails.production_companies.map(company => `${company.name}`).join(", ")}
        </div>
        </div>

        <h4> Production Countries</h4>
        <div classes='list-group'>${showDetails.production_countries.map((country) => `<span>${country.name}</span>`).join('')}</div>
    `;  


    document.querySelector('#show-details').appendChild(div);
}

/**
 * Display slider movies
 * @function di
 */
export async function displaySlider() {
    try {
        const data = await fetchAPIData('movie/now_playing');
        
    } catch (error) {
        
    }

  slider_results.forEach((slider_results) => {
    const slider_div = document.createElement('div');
    slider_div.classList.add('swiper-slide');
    slider_div.innerHTML = `
      <a href="movie-details.html?id=${slider_results.id}">
        <img src="https://image.tmdb.org/t/p/w500${slider_results.poster_path}" alt="Movie Title" />
      </a>
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${slider_results.vote_average} / 10
      </h4>
    `;

    document.querySelector('.swiper-wrapper').appendChild(slider_div);

  });
  initSwiper();
  
  
  console.log(slider_results);
}



/**
 * Display slider shows
 * @function displaySliderShows
 * 
 */
export async function displaySliderShows() {
  // console.log("displaySliderShows called!");

  const { results} = await fetchAPIData('tv/on_the_air');
  // console.log('Fetched TV Shows for Slider:', results);
  results.forEach((results) => {
    const div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
      <a href="tv-details.html?id=${results.id}">
        <img src="https://image.tmdb.org/t/p/w500${results.poster_path}" alt="TV Show Title" />
      </a>
      <h4 class="swiper-rating">
        <i class="fas fa-star text-secondary"></i> ${results.vote_average.toFixed(0)} / 10
      </h4>
    `;

    document.querySelector('.swiper-wrapper').appendChild(div);

  });
  initSwiper();
  
  
  // console.log('Display Slider Shows ended');
  
}


// search movies and shows
export async function displaySearch() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  global.search.type = urlParams.get('type');
  global.search.term = urlParams.get('search-term'); 


  if (global.search.term !== '' && global.search.term !== null) {
    // @todo - make request and display results
    const data = await searchAPIData();

    if (!data || !data.results) {
      showAlert('Error fetching search results', 'alert-error');
      return;
    }

    const { results, page, total_results, total_pages } = await searchAPIData();
    // console.log(total_pages)


    global.search.page = page;
    console.log(`page ${global.search.page}`);
    global.search.totalPages = total_pages; 
    console.log(`last page ${global.search.totalPages}`);
    global.search.totalResults = total_results; 

    if (results.length === 0) {
      showAlert('No results found');
      return;
    } 

    displaySearchResults(results);
    document.querySelector('#search-term').value = '';
    // `;
  } else {
    showAlert('please enter something to search', 'alert-error');
  }
}

// display search results
export function displaySearchResults(results) {
    document.querySelector('#search-results').innerHTML = '';
    document.querySelector('#pagination').innerHTML = '';
    
    
    results.forEach((result) => {
      const searchDiv = document.createElement('div');
      searchDiv.classList.add('card');
      searchDiv.innerHTML = `
      ${
        result.poster_path ? `
        <img
        src="https://image.tmdb.org/t/p/w500${result.poster_path}"
                    class="card-img-top"
                    alt="${global.search.type === 'movie' ? result.title : result.name}"
                    />
                    ` 
                    : `<img
                    src="../images/no-image.jpg"
                    class="card-img-top"
                    alt="${global.search.type === 'movie' ? result.title : result.name}"
                />
                `   
            }
        </div>
          <div>
            <h2>${global.search.type === 'movie' ? result.title : result.name}</h2>
            <p class="text-muted">Released on: ${global.search.type === 'movie' ? result.release_date : result.first_air_date}</p>
          </div>
     `;
     // dispaly nunmber of results
    document.querySelector('#search-results-heading').innerHTML = `
    <h2>${results.length} results of ${global.search.totalResults} for ${global.search.term}</h2>
    `;
    document.querySelector('#search-results').appendChild(searchDiv);
  })
  displaypagination();
}


// Pagination
export function displaypagination(results) {
  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination')
  paginationDiv.innerHTML = `
    <button class="btn btn-primary" id="prev">Prev</button>
    <button class="btn btn-primary" id="next">Next</button>
    <div class="page-counter">${global.search.page} of ${global.search.totalPages}</div>
  `;  
  document.querySelector('#pagination').appendChild(paginationDiv)
  
  if (global.search.page === 1) {
    document.querySelector('#prev').disabled = true;
    // Disable prev button 
  }
  // Disable next button 
  if (global.search.page === global.search.totalPages) {
    document.querySelector('#next').disabled = true;
  }

  // Next page
  document.querySelector('#next').addEventListener('click', async () => {
    global.search.page++;
    const { results, totalPages } = await searchAPIData()
    // displaySearchResult(results)
    displaySearch(results) 

  });

  // Prev page
  document.querySelector('#prev').addEventListener('click', async () => {
    global.search.page--;
    const { results, totalPages } = await searchAPIData()
    displaySearch(results) 
  });

}