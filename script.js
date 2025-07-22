moviesSearched = [];

async function fetchData() {
    try {

        const movTitle = document.getElementById('form-title').value.trim().toLowerCase();
        let movTitleExtension = "";

        // Checks if length of list > 1, if it is then the string movTitle has more than 1 word
        if(movTitle.split(" ").length > 1) {
            let titleList = movTitle.split(" ");
            movTitleExtension = titleList.join('+');
        }
        else {
            movTitleExtension = movTitle;
        }

        let url = `https://www.omdbapi.com/?apikey=77a8b526&t=${movTitleExtension}`;
        console.log(movTitleExtension);
        console.log(url);
        console.log(moviesSearched);

        const response = await fetch(url)

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const sanitizedTitle = data.Title.replace(/[^\w-]/g, '-');
        clearYearGenre();
        if(!moviesSearched.includes(sanitizedTitle)) {
            searchAnimation();
            document.getElementById('movie-info1').innerHTML = `<div class="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full" id="${sanitizedTitle}">
                                                                    <div class="relative flex justify-center h-85 m-2.5 overflow-hidden text-white rounded-md">
                                                                        <img src="${data.Poster}"/>
                                                                    </div>
                                                                    <div class="p-4">
                                                                        <h6 class="mb-2 text-slate-800 text-xl text-center font-semibold">
                                                                            ${data.Title}
                                                                        </h6>
                                                                        <p class="text-slate-600 leading-normal font-light">
                                                                            Year: ${data.Year}
                                                                        </p>
                                                                        <p class="text-slate-600 leading-normal font-light">
                                                                            Genre: ${data.Genre}
                                                                        </p>
                                                                        <p class="text-slate-600 leading-normal font-light">
                                                                            Director: ${data.Director}
                                                                        </p>
                                                                        <p class="text-slate-600 leading-normal font-light">
                                                                            Actors: ${data.Actors}
                                                                        </p>
                                                                        <p class="text-slate-600 leading-normal font-light">
                                                                            Summary: ${data.Plot}
                                                                        </p>
                                                                        <p class="text-slate-600 leading-normal font-light">
                                                                            Ratings:
                                                                            <ul>
                                                                                <li>Internet Movie Database: ${data.Ratings[0]['Value']}</li>
                                                                                <li>Rotten Tomatoes: ${data.Ratings[1]['Value']}</li>
                                                                                <li>Metacritic: ${data.Ratings[2]['Value']}</li>
                                                                            </ul>
                                                                        </p>
                                                                    </div>
                                                                </div>` 
                                                                + document.getElementById('movie-info1').innerHTML;
            moviesSearched.push(sanitizedTitle);
            console.log(moviesSearched);
        }
        else {
            let el = document.querySelector(`#${sanitizedTitle}`);

            // Shake Animation
            el.classList.add('shake');
            setTimeout(() => el.classList.remove('shake'), 500);
        }






        console.log(data);


    }
    catch(error){

        const message = document.createElement("div");
        message.textContent = "Movie not found!";
        message.className = "fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-150 opacity-100 transition-opacity ease-in-out duration-500"; //centers it
        message.id = "not-found-message"
        document.getElementById('movie-info').appendChild(message); // Or append to a specific container
        movieNotFound(message);

    }
    
}


// Transition of Message

function movieNotFound(message) {
    setTimeout(() => {
        message.classList.replace('opacity-0', 'opacity-100')
    }, 10);

    setTimeout(() => {
        message.classList.replace('opacity-100', 'opacity-0');
    }, 2000);

    setTimeout(() => {
        message.remove(); // removes it from the DOM after 2 seconds
    }, 2500);
}

//  Search Animation
function searchAnimation() {
    let button = document.querySelector('#search-button');
    button.classList.add('bounce');
    setTimeout(() => button.classList.remove('bounce'), 500);
}

// Clear inputs on Year and Genre boxes
function clearYearGenre() {
    document.getElementById('year-textbox').value = "";
    document.getElementById('genre-textbox').value = "";
}
