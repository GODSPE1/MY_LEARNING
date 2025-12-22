import { global } from "../config.js";
import { showSpinner, hideSpinner } from "../utils/utils.js";
/**
 * Fecthes data from the TMDB (The Movie database) API popular movies, shows, details
 * 
 * This function builds a request URL using a base API URL,
 * endpoint, API key, then returns the response data.
 * 
 * @async
 * @function fetchAPIData
 * @param {string} endpoint - The TMDB API endpoint (e.g. '/search/movie')
 * @returns {Promise<Object>} - The JSON response data from the API
 * 
 * @example
 * fectchAPIData('search/movie')
 *      .then(data => console.log(data))
 *      .catch(error => console.log(error))
*/
export async function fetchAPIData(endpoint) {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  try {
    
    showSpinner(); // Runs the the show spinner while fetching data

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en&query=${global.search.term}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching API data:', error);
    return null; 
  } finally {
    hideSpinner();

  }  
//   return data;
}




/**
 * Feches data from the TMDB (The Movie database) API for search
 * 
 * This function builds a request URL using a base API URL,
 * endpoint, API key, and search term, then returns the response data.
 * 
 * @async
 * @function searchAPIData
 * @param {*} endpoint 
 * @returns {Promise<Object>}
*/
export async function searchAPIData() {

  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  try {
    showSpinner();

    const response = await fetch(`${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page}`);
    
    if (response.status !== 200) {
        throw new Error('Failed to fetch data from API');
    }
    const data = await response.json();
    return data;
    } catch (error) {
        console.error('Error fetching search data:', error);
        return null;
    } finally {
        hideSpinner();
    }
//   return data;
}
