# Flixx App - Movie & TV Show Tracker

A dynamic and interactive web application built with vanilla JavaScript that allows users to browse popular movies and TV shows, view detailed information, and search for their favorite content. This application leverages the TMDB (The Movie Database) API to provide up-to-date data.

## Project Overview

This project serves as a comprehensive guide to building a modern JavaScript application. It tracks:
- The popular movie and tv shows.

It demonstrates key concepts such as:
- Asynchronous JavaScript (Fetch API, Async/Await)
- DOM Manipulation
- Routing (Client-side)
- Component-based architecture
- Third-party library integration (Swiper.js)

**Note on Architecture:**
This project was initially written as a monolithic script and was later refactored and modularized to improve code maintainability, readability, and scalability. The codebase is now organized into separate modules for configuration, API services, UI components, and utility functions.

## Features

- **Popular Movies & TV Shows**: Browse the latest and most popular content with a responsive slider.
- **Detailed Views**: Click on any movie or TV show to view comprehensive details including rating, release date, overview, genres, and production companies.
- **Search Functionality**: Search for specific movies or TV shows using the search bar.
- **Responsive Design**: Optimized for various screen sizes.
- **Interactive UI**: Features loading spinners, alerts, and smooth transitions.

## Technologies Used

- **HTML5**: Semantic markup for structure.
- **CSS3**: Custom styling and layout.
- **JavaScript (ES6+)**: Core logic, DOM manipulation, and modules.
- **TMDB API**: External data source for movie and TV show information.
- **Swiper.js**: A modern touch slider for the carousel feature.
- **FontAwesome**: For icons.

## Getting Started

To run this project locally:

1.  Clone the repository.
2.  Open `index.html` in your preferred web browser (or use a local development server like Live Server for VS Code).
3.  Start browsing!

## Project Structure

The project is organized as follows:

- `js/main.js`: The entry point of the application, handling routing and initialization.
- `js/config.js`: Configuration settings including API keys and global state.
- `js/services/api.js`: Handles all HTTP requests to the TMDB API.
- `js/components/cmp.js`: Contains functions for rendering UI components.
- `js/utils/utils.js`: Utility functions for formatting and UI helpers.

## License

This project is licensed under the MIT License.
