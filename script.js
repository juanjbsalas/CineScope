// fetch("http://www.omdbapi.com/?apikey=77a8b526&t=Star+Wars")
//     .then(response => {
//         if(!response.ok ){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));


async function fetchData() {
    try {

        const movTitle = document.getElementById('form-title').value;

        // Checks if length of list > 1, if it is then the string movTitle has more than 1 word
        if(movTitle.split().length > 1) {
            let titleList = movTitle.split();
            //! I must include the last word later
            let movTitleExtension = titleList.join('+');
        }
        else {
            let movTitleExtension = movTitle;
        }

        let url = 'http://www.omdbapi.com/?apikey=77a8b526&t=' + movTitle;

        const response = await fetch(url)

        if(!response.ok){
            throw new Error("Could not fetch resource");
            // add inner html here for error
        }

        const data = await response.json();

        document.getElementById('movie-info1').innerHTML = `<div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-[23%]">
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
                                                                <div class="px-4 pb-4 pt-0 mt-2">
                                                                    <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                                                        Read more
                                                                    </button>
                                                                </div>
                                                            </div>` 
                                                            + document.getElementById('movie-info1').innerHTML;




        console.log(data);


    }
    catch(error){
        // console.log("Did not find movie");

        const message = document.createElement("div");
        message.textContent = "Movie not found!";
        message.className = "fixed top-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-lg z-50";
        message.id = "not-found-message"
        document.getElementById('movie-info').appendChild(message); // Or append to a specific container
        console.log("it is working!")

        setTimeout(() => {
        message.remove(); // removes it from the DOM after 2 seconds
        }, 2000);

    }
    
}

