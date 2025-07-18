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

        document.getElementById('movie-info').innerHTML += `<div class=\"relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96\">\n\t<div class=\"relative h-56 m-2.5 overflow-hidden text-white rounded-md\">\n\t\t<img src=\"https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80\" alt=\"card-image\" />\n\t</div>\n\t<div class=\"p-4\">\n\t\t<h6 class=\"mb-2 text-slate-800 text-xl font-semibold\">\n\t\t\tMovie Title: ${data.Title}\n\t\t</h6>\n\t\t<p class=\"text-slate-600 leading-normal font-light\">\n\t\t\tYear: ${data.Year}\n\t\t</p>\n\t\t<p class=\"text-slate-600 leading-normal font-light\">\n\t\t\tActors: ${data.Actors}\n\t\t</p>\n\t</div>\n\t<div class=\"px-4 pb-4 pt-0 mt-2\">\n\t\t<button class=\"rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none\" type=\"button\">\n\t\t\tRead more\n\t\t</button>\n\t</div>\n</div>`


        console.log(data);


    }
    catch(error){
        console.error(error);
    }
    
}

