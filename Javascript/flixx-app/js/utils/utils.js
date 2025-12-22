import { global } from "../config.js";

// function to show spinner
export function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}


// Function to hide Spinner
export function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show');
}


// Source - https://stackoverflow.com/a
// Posted by Elias Zamaria, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-01, License - CC BY-SA 4.0

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// show alert
export function showAlert(message, className = 'alert-error') {
  const alertElement = document.createElement('div')
  alertElement.classList.add('alert', className);
  alertElement.appendChild(document.createTextNode(message));
  document.querySelector('#alert').appendChild(alertElement)
  setTimeout(() => alertElement.remove(), 3000);


}

// HighLightLinks
export function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    const logo = document.querySelector('.logo');
    const current = global.currentPage;

    links.forEach((link) => {
        const linkPath = new URL(link.getAttribute('href'), window.location.origin).pathname;
        if (linkPath === current || (current === '/' && linkPath === '/index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    if (logo) {
        const logoPath = new URL(logo.getAttribute('href'), window.location.origin).pathname;
        if (logoPath === current || (current === '/' && logoPath === '/index.html')) {
            logo.classList.add('active');
        } else {
            logo.classList.remove('active');
        }
    }
}