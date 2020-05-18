document.addEventListener('DOMContentLoaded', () => {
  intialize();
});

function intialize() {
  const form = document.getElementById('joke-form')
  let joke;

  fetchJoke();
  formAddEventListener(form);
}

let joke;

function fetchJoke() {
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      "Accept": "application/json"
    }
  })
    .then(res => res.json())
    .then(jokeData => joke = jokeData.joke)
}

function formAddEventListener(form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    username = event.target.querySelector('#name-input').value;
    if (username === "") return;

    const jokeList = document.getElementById('joke-list')
    const newJokeLi = document.createElement('li')

    fetchJoke();

    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  });
}