// console.log(window.location.pathname);
export const global = {
  currentPage: window.location.pathname,
  search: {
    term: '',
    type: '',
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  // totalResults: 0
  api: {
    apiKey: '66551f7b974c267f5a2c1af241473288',
    apiUrl: 'https://api.themoviedb.org/3/',
    
  }
};