const jokesBtn = document.getElementById('jokeBtn');
const stopJokesBtn = document.querySelector('#stopJokeBtn');
const joke = document.getElementById('joke');

let intervalID;

// This function fetches and displays a new joke
function generateJoke() {
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText).value;
            joke.textContent = data;
        }
    };
    xhr.send();
}

// This function sets up an automatic joke generator
function generateJokes() {
    // Only start a new interval if one isn't already running
    if (!intervalID) {
        intervalID = setInterval(generateJoke, 1000);
    }
}

// This function stop the automatic joke generator
function stopJokes() {
    clearInterval(intervalID)
    joke.textContent = "Joke is Over hahahahah";

}

jokesBtn.addEventListener('click', generateJokes);
stopJokesBtn.addEventListener('click', stopJokes);
