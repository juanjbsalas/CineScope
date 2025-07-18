fetch("http://www.omdbapi.com/?apikey=77a8b526&t=Star+Wars")
    .then(response => response.json())
    .then(data => console.log(data.Title))
    .catch(error => console.error(error));
