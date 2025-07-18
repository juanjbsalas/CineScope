// fetch("http://www.omdbapi.com/?apikey=77a8b526&t=Star+Wars")
//     .then(response => {
//         if(!response.ok ){
//             throw new Error("Could not fetch resource");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

url = "http://www.omdbapi.com/?apikey=77a8b526&"

async function fetchData() {
    try {
        const response = await fetch("http://www.omdbapi.com/?apikey=77a8b526&t=Star+Wars")

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        console.log(data);
    }
    catch(error){
        console.error(error)
    }
    
}

fetchData();


