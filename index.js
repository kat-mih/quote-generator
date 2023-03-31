const api = "https://api.quotable.io/random";

const button = document.querySelector('.button');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

button.addEventListener('click', generateQuote);

function generateQuote() {
    fetch(api)
      .then((res) => res.json())
      .then((value) => {
        quote.innerHTML = value.content;
        person.innerHTML = value.author;
      });
}