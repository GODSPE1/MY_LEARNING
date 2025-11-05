# Joke Generation (learning project)

A small learning project that demonstrates calling a web API using XMLHttpRequest and controlling repeated requests with setInterval and clearInterval. The app fetches jokes from a remote API and shows how to start and stop automatic refreshing of content.

This repository is intentionally minimal and was created to practice basic browser networking (XMLHttpRequest), timing functions (setInterval / clearInterval), and DOM updates with vanilla JavaScript.

## What you'll find

- `jokes.html` — The single-page UI for the demo.
- `jokes.css` — Simple styling for the page.
- `jokes.js` — JavaScript that performs the API call with `XMLHttpRequest`, updates the page, and uses `setInterval` / `clearInterval` to auto-refresh.

## Key ideas demonstrated

- Using XMLHttpRequest to call a third-party (or local) API and handle the response.
- Updating the DOM with new data returned from the API.
- Using `setInterval` to poll the API at a regular interval (auto-refresh).
- Using `clearInterval` to stop the auto-refresh and clean up timers.

## How it works (high level)

1. The script in `jokes.js` creates an `XMLHttpRequest` and sends it to a jokes API endpoint.
2. When the response arrives, the handler parses the response and updates the page with the joke text.
3. `setInterval` is used to call the fetch function repeatedly (for example, every 5 seconds), so the page refreshes with a new joke automatically.
4. When you want to stop automatic updates, `clearInterval` is called with the timer id returned by `setInterval`.

Note: This project uses the older `XMLHttpRequest` API on purpose for learning. In production code you may prefer `fetch()` or a library like axios for promises/async/await support.

## Quick start (view in browser)

1. Open the project folder in your file manager or editor.
2. Open `jokes.html` in a modern browser.

Optional: for a better development experience, use the VS Code Live Server extension or a simple static server so APIs and CORS behave predictably:


## Usage (typical)

- The page loads and shows a joke fetched by `jokes.js`.
- If the UI provides controls (Start / Stop or similar), use them to enable or disable automatic refresh. Those controls call `setInterval` to begin periodic requests and `clearInterval` to stop them.
- You can adjust the refresh interval by editing the interval value in `jokes.js`.

If the project doesn't include explicit buttons, you can still start/stop the auto-refresh from the browser console (for learning) — look for the timer variable or functions that start/stop polling in `jokes.js`.

## Contract (inputs / outputs / error modes)

- Inputs: none from the command line; the browser performs HTTP GET requests to a joke API.
- Outputs: DOM updates showing a single joke (text), optionally author/source.
- Error modes: network failures, API returning unexpected data, or CORS issues when running from the filesystem.

## Edge cases and notes

- Empty or malformed responses are handled by displaying an error message or fallback text (check `jokes.js` for the current behavior).
- Rapid intervals may cause rate-limiting on public joke APIs—use a reasonable interval (for example, 5–15 seconds) while testing.
- If running the file directly from the filesystem (file://) you might see CORS errors. Use a local server to avoid them.

## Extending this project (ideas)

- Replace `XMLHttpRequest` with `fetch` and async/await.
- Add UI controls to set interval length at runtime.
- Cache recent jokes and allow the user to cycle through them instead of constantly hitting the API.
- Add error retries with exponential backoff.

## Troubleshooting

- If no jokes appear, open the browser console (F12) and look for network or JS errors.
- If you see CORS errors, run a local server instead of opening the file directly.
- If the API returns HTML or unexpected JSON, double-check the endpoint URL configured in `jokes.js`.

## License

This project is for learning and practice. Feel free to adapt or reuse the code. If you want a formal license, add one (for example, MIT) in a `LICENSE` file.

---

If you'd like, I can also:

- Add a short section to `jokes.js` showing a documented example of starting/stopping the interval (example functions and variable names), or
- Convert the network code to `fetch()` and add a tiny test harness.

Tell me which of these you'd prefer and I will implement it.


