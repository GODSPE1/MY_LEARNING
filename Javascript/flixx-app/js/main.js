import { global } from "./config.js";
import { highlightActiveLink, showAlert, numberWithCommas } from "./utils/utils.js";
// import { fetchAPIData, searchAPIData } from "./services/api.js";
// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import { displaySlider, displayMovieDetails, displayPopulayMovies } from "./components/cmp.js";
import { displaySearch, displayTvShowDetails } from "./components/cmp.js";


// Initialize Swiper
export function initSwiper() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    freeMode: true,
    loop: false,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true, 
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    },
    parallax: {
      dataSwiperParallax: 60,
    },
})

}




// init App
function init() {
// console.log(global.currentPage);
  switch (global.currentPage) {
    case  '/':
    case  '/index.html':
      displaySlider();
      console.log("slider");
      displayPopulayMovies();
      console.log("index");
      break;

    case '/shows.html':
        displaySliderShows();
        displayPopularShows();
        console.log('Shows');
        break;

    case '/movie-details.html':
        displayMovieDetails();
        console.log('Movie details');
        break;

    case '/tv-details.html':
        displayTvShowDetails();
        console.log('TV Show details');

    case '/search.html':
        displaySearch();
        console.log('Search Results');
        break;

    // default:
    //   break;
  }

  highlightActiveLink();
}
document.addEventListener('DOMContentLoaded', init);
