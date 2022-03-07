let url = 'http://www.omdbapi.com/?apikey=b61d31f7&';
let searchinput = document.querySelector('#searchinput');
let searchbutton = document.querySelector('#searchbutton');


searchbutton.onclick = function(event) {
    event.preventDefault()
    let value = searchinput.value;

    let movies = url + 't=' + value;

    let outcome = ""

    fetch(movies)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.querySelector('.title').innerHTML = data.Title;
            document.querySelector('.time').innerHTML = data.Runtime;
            document.querySelector('.genre').innerHTML = data.Genre;
            document.querySelector('.year').innerHTML = data.Released;
            document.querySelector('.plot').innerHTML = data.Plot;
            document.querySelector('.production').innerHTML = data.Production;
            document.querySelector('.awards').innerHTML = data.Awards;
            document.querySelector('.imdbvotes').innerHTML = data.imdbVotes;

            outcome = `<img class="img-thumnail" src="${data.Poster}"/>`
            $("#outcome").html(outcome)
        })
};