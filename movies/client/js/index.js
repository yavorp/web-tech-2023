const lables = document.getElementsByTagName('label');
const len = lables.length;
for (let index = 0; index < len; index++) {
    console.log(lables.item(index).textContent);
}

class Movie {
    constructor(title, year, genre, producer) {
        this.title = title;
        this.year = year;
        this.genre = genre;
        this.producer = producer;
    }
}

const button = document.getElementById('form-submit');
button.addEventListener('click', event => {
    event.preventDefault();
    const title = getInputValue('title');
    const genre = getInputValue('genre')
    const year = getInputValue('year');
    const producer = getInputValue('producer');
    console.log(title, genre, year, producer);
    const movie = new Movie(title, year, genre, producer);
    addRow(movie);
});

function getInputValue(id) {
    return document.getElementById(id).value;
}

function addRow(movie) {
    const table = document.getElementById('movies-table');
    const row = document.createElement('tr');
    const titleTd = document.createElement('td');
    const yearTd = document.createElement('td');
    const genreTd = document.createElement('td');
    const producerTd = document.createElement('td');
    titleTd.textContent = movie.title;
    yearTd.textContent = movie.year;
    genreTd.textContent = movie.genre;
    producerTd.textContent = movie.producer
    row.append(titleTd, yearTd, genreTd, producerTd);

    table.appendChild(row);
}
