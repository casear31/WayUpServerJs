const query = 'man';

const requestUrl = `http://api.tvmaze.com/search/shows?q=${query}`;
const dataWrapper = document.getElementById('data-wrapper');

const createTamplate = data => {
    if (data.show.genres.length) {
        genres = data.show.genres.reduce((acc, item) => {
            return acc + ", " + item;
        })
    } else {
        genres = 'unknown'
    }

    return `
        <div class="data-item">
        <div class="image">
            <img src="${data.show.image ? data.show.image.medium: ''}" alt="">
        </div>
        <div>
            <p>Name: ${data.show.name}</p>
        </div>
        <div>
            <p>Score: ${data.score}</p>
        </div>
        <div>
            <p>Genres: ${genres}</p>
        </div>
        <div>
            <p>Language: ${data.show.languge}</p>
        </div>
        <div>
            <p>Description: ${data.show.summary}</p>
        </div>
    </div>
    `
}

fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
        if (data) {
            data.forEach(item => {
               dataWrapper.innerHTML += createTamplate(item) 
              
          });
      }
  })