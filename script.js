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
        }

        const data = await response.json();
        console.log(data);


    }
    catch(error){
        console.error(error);
    }
    
}

