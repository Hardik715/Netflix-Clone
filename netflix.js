// // api key from tmdb
// const api = "api_key=25a8b057ee98a3ff86d679b2fed5f41a";

// // base url of the site
// const base_url = "https://api.themoviedb.org/3";

// const banner_url = "https://image.tmdb.org/t/p/original";

// const img_url = "https://image.tmdb.org/t/p/w300";

// //  request for movies data

// const requests = {

//     fetchTopRated: `${base_url}/trending/all/week?${api}&language=en-US`,
//     fetchNetflixOriginals: `${base_url}/discover/tv?${api}&with_networks=213`,
//     fetchActionMovies: `${base_url}/discover/tv?${api}&with_genres=28`,
//     fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
//     fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
//     fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
//     fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
// };

// // used to truncate the string

// function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
// }

// //  banner

// // top rated

// // fetch(requests.fetchTrending)
// //     .then((res) => res.json())


// //     .then((data) => {
// //         const headrow = ducment.getElementById("headrow");
// //         const row = document.createElement("div");
// //         row.className = "row";
// //         headrow.appendChild(row);
// //         const title = document.createElement("h2");
// //         title.className = "row_title";
// //         title.innerText = "top rated";
// //         row.appendChild(title);
// //         const row_posters = document.createElement("div");
// //         row_posters.className = "row_posters";
// //         row.appendChild(row_posters);

// //         data.results.forEach((movie) => {

// //             const poster = document.createElement("img");
// //             poster.className = "row_posterLarge";

// //             var s2 = movie.id;

// //             poster.id = s2;
// //             poster.src = img_url + movie.backdrop_path;
// //             row_posters.appendChild(poster);
// //         });
// //     });

// // action movies 

// fetch(requests.fetchActionMovies)
//     .then((res) => res.json())


//     .then((data) => {
//         // every refresh the movie will change, for that math.random will be used
//         // console.log(data)

//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");

//         row.className = "row";
//         row.classList.add("netflixrow");

//         headrow.appendChild(row);

//         const title = document.createElement("h2");

//         title.className = "row_title";
//         title.innerText = "Action Movies";

//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.className = "row_posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {

//             const poster = document.createElement("img");
//             poster.className = "row_posterLarge";

//             var s = movie.id;
//             // var s = movie.name.replace(/\s+/g, ""); //it used so that the movie name gets changing, not repeating

//             poster.id = s;
//             poster.src = img_url + movie.poster_path;
//             row_posters.appendChild(poster);

//         });
//     });

// // comedy movies

// fetch(requests.fetchComedyMovies)
//     .then((res) => res.json())


//     .then((data) => {
//         // every refresh the movie will change, for that math.random will be used
//         // console.log(data)

//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");

//         row.className = "row";
//         row.classList.add("netflixrow");

//         headrow.appendChild(row);

//         const title = document.createElement("h2");

//         title.className = "row_title";
//         title.innerText = "Comedy Movies";

//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.className = "row_posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {

//             const poster = document.createElement("img");
//             poster.className = "row_posterLarge";

//             var s3 = movie.name.replace(/\s+/g, ""); //it used so that the movie name gets changing, not repeating

//             poster.id = s3;
//             poster.src = img_url + movie.poster_path;
//             row_posters.appendChild(poster);

//         });
//     });

// // horror movies

// fetch(requests.fetchHorrorMovies)
//     .then((res) => res.json())


//     .then((data) => {
//         // every refresh the movie will change, for that math.random will be used
//         // console.log(data)

//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");

//         row.className = "row";
//         row.classList.add("netflixrow");

//         headrow.appendChild(row);

//         const title = document.createElement("h2");

//         title.className = "row_title";
//         title.innerText = "Horror Movies";

//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.className = "row_posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {

//             const poster = document.createElement("img");
//             poster.className = "row_posterLarge";

//             var s4 = movie.name.replace(/\s+/g, ""); //it used so that the movie name gets changing, not repeating

//             poster.id = s4;
//             poster.src = img_url + movie.poster_path;
//             row_posters.appendChild(poster);

//         });
//     });

// // romantic movies

// fetch(requests.fetchRomanceMovies)
//     .then((res) => res.json())


//     .then((data) => {
//         // every refresh the movie will change, for that math.random will be used
//         // console.log(data)

//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");

//         row.className = "row";
//         row.classList.add("netflixrow");

//         headrow.appendChild(row);

//         const title = document.createElement("h2");

//         title.className = "row_title";
//         title.innerText = "Romantic Movies";

//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.className = "row_posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {

//             const poster = document.createElement("img");
//             poster.className = "row_posterLarge";

//             var s5 = movie.name.replace(/\s+/g, ""); //it used so that the movie name gets changing, not repeating

//             poster.id = s5;
//             poster.src = img_url + movie.poster_path;
//             row_posters.appendChild(poster);

//         });
//     });

// fetch(requests.fetchDocumentaries)
//     .then((res) => res.json())


//     .then((data) => {
//         // every refresh the movie will change, for that math.random will be used
//         // console.log(data)

//         const headrow = document.getElementById("headrow");
//         const row = document.createElement("div");

//         row.className = "row";
//         row.classList.add("netflixrow");

//         headrow.appendChild(row);

//         const title = document.createElement("h2");

//         title.className = "row_title";
//         title.innerText = "Documentaries";

//         row.appendChild(title);

//         const row_posters = document.createElement("div");
//         row_posters.className = "row_posters";
//         row.appendChild(row_posters);

//         data.results.forEach((movie) => {

//             const poster = document.createElement("img");
//             poster.className = "row_posterLarge";

//             var s6 = movie.name.replace(/\s+/g, ""); //it used so that the movie name gets changing, not repeating

//             poster.id = s6;
//             poster.src = img_url + movie.poster_path;
//             row_posters.appendChild(poster);

//         });
//     });



// const setMovie =
//     data.results[Math.floor(Math.random() * data.results.length - 1)];

// var banner = document.getElementById("banner");
// var banner_title = document.getElementById("banner_title");
// var banner_desc = document.getElementById("banner_description");


// banner.style.backgroundImage =
//     "url(" + banner_url + setMovie.backdrop_path + ")";


// api key from the TMDB
const api = 'api_key=eb42ea2f6eb20b563a556c0b47b11b82';
// base url of the website api
const base_url = 'https://api.themoviedb.org/3';
const bannner_url = 'https://image.tmdb.org/t/p/original';
const image_url = 'https://image.tmdb.org/t/p/w185';

// link to be fetched requests for the movies data
const requests = {
    fetchTrending : `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOriginals : `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies : `${base_url}/discover/movie?${api}&with_genres=28,`,
    fetchComedyMovies : `${base_url}/discover/movie?${api}&with_genres=35,`,
    fetchHorrorMovies : `${base_url}/discover/movie?${api}&with_genres=27,`,
    fetchRomanceMovies : `${base_url}/discover/movie?${api}&with_genres=10749,`,
    fetchDocumentaries : `${base_url}/discover/movie?${api}&with_genres=99,`
}


// used to truncate the description of the movie being fetched
function truncate(str , n){
    return str.length>n ? str.substr(0 , n-1) + "..." : str;
}

// fetching the banner
// link aaya jisko fetch krna hai
fetch(requests.fetchNetflixOriginals)
.then( res => res.json())
.then((data)=>{ // yaha par data mil gya hai json format mein yaha par alag alag index par movies hai aur unke results wale function mein saare details hai movie ke
    
    // har reload par alag alag banner aayenge moveis ke iss liye random number generate kr rhe hai
    const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

    var banner = document.getElementById('banner');
    var banner_title = document.getElementById('banner_title');
    var banner_desc = document.getElementById('banner_description');

    // banner.style.backgroundImage = `url('${bannner_url}${setMovie.backdrop_path}')`;
    banner.style.backgroundImage = 'url(' + bannner_url + setMovie.backdrop_path + ')';
    banner_desc.innerText = truncate(setMovie.overview , 200);
    banner_title.innerText = setMovie.name;
})

// Now we will set the rows of the app like trending,action,comedy and all others
// Creating Netflix Originals
fetch(requests.fetchNetflixOriginals)
.then(res => res.json())
.then((data)=>{
    const headrow = document.getElementById('headrow');//this is proper ek row 
    const row = document.createElement('div');// this is wo jo horizontal scroll hota hai movies ka wo 
    
    row.className = 'row';
    row.classList.add('netflixrow');
    headrow.appendChild(row);


    const title = document.createElement('h2');
    title.className = 'row_title';
    title.innerText = 'Netflix Originals'
    row.appendChild(title);


    const row_posters = document.createElement('div');
    row_posters.className = 'row_posters';
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie)=>{
        const poster = document.createElement('img');
        poster.className = 'row_posterLarge';

        var s1 = movie.name.replace(/\s+/g , "");

        poster.id = s1;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})


// Creating Trending row
fetch(requests.fetchTrending)
.then(res => res.json())
.then((data)=>{
    const headrow = document.getElementById('headrow');//this is proper ek row 
    const row = document.createElement('div');// this is wo jo horizontal scroll hota hai movies ka wo 
    
    row.className = 'row';
    row.classList.add('netflixrow');
    headrow.appendChild(row);


    const title = document.createElement('h2');
    title.className = 'row_title';
    title.innerText = 'Trending'
    row.appendChild(title);


    const row_posters = document.createElement('div');
    row_posters.className = 'row_posters';
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie)=>{
        const poster = document.createElement('img');
        poster.className = 'row_posterLarge';

        var s2 = movie.id;

        poster.id = s2;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})


// fetching Action Movies

fetch(requests.fetchActionMovies)
.then(res => res.json())
.then((data)=>{
    const headrow = document.getElementById('headrow');//this is proper ek row 
    const row = document.createElement('div');// this is wo jo horizontal scroll hota hai movies ka wo 
    
    row.className = 'row';
    row.classList.add('netflixrow');
    headrow.appendChild(row);


    const title = document.createElement('h2');
    title.className = 'row_title';
    title.innerText = 'Action'
    row.appendChild(title);


    const row_posters = document.createElement('div');
    row_posters.className = 'row_posters';
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie)=>{
        const poster = document.createElement('img');
        poster.className = 'row_posterLarge';

        var s3 = movie.id;

        poster.id = s3;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})

// fetching Comedy Movies

fetch(requests.fetchComedyMovies)
.then(res => res.json())
.then((data)=>{
    const headrow = document.getElementById('headrow');//this is proper ek row 
    const row = document.createElement('div');// this is wo jo horizontal scroll hota hai movies ka wo 
    
    row.className = 'row';
    row.classList.add('netflixrow');
    headrow.appendChild(row);


    const title = document.createElement('h2');
    title.className = 'row_title';
    title.innerText = 'Comedy'
    row.appendChild(title);


    const row_posters = document.createElement('div');
    row_posters.className = 'row_posters';
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie)=>{
        const poster = document.createElement('img');
        poster.className = 'row_posterLarge';

        var s4 = movie.id;

        poster.id = s4;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})


// fetch horror Movies

fetch(requests.fetchHorrorMovies)
.then(res => res.json())
.then((data)=>{
    const headrow = document.getElementById('headrow');//this is proper ek row 
    const row = document.createElement('div');// this is wo jo horizontal scroll hota hai movies ka wo 
    
    row.className = 'row';
    row.classList.add('netflixrow');
    headrow.appendChild(row);


    const title = document.createElement('h2');
    title.className = 'row_title';
    title.innerText = 'Horror'
    row.appendChild(title);


    const row_posters = document.createElement('div');
    row_posters.className = 'row_posters';
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie)=>{
        const poster = document.createElement('img');
        poster.className = 'row_posterLarge';

        var s4 = movie.id;

        poster.id = s4;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})


// Fetching Romance movies
fetch(requests.fetchHorrorMovies)
.then(res => res.json())
.then((data)=>{
    const headrow = document.getElementById('headrow');//this is proper ek row 
    const row = document.createElement('div');// this is wo jo horizontal scroll hota hai movies ka wo 
    
    row.className = 'row';
    row.classList.add('netflixrow');
    headrow.appendChild(row);


    const title = document.createElement('h2');
    title.className = 'row_title';
    title.innerText = 'Romance'
    row.appendChild(title);


    const row_posters = document.createElement('div');
    row_posters.className = 'row_posters';
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie)=>{
        const poster = document.createElement('img');
        poster.className = 'row_posterLarge';

        var s5 = movie.id;

        poster.id = s5;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})


// fetch documentries movies

fetch(requests.fetchDocumentaries)
.then(res => res.json())
.then((data)=>{
    const headrow = document.getElementById('headrow');//this is proper ek row 
    const row = document.createElement('div');// this is wo jo horizontal scroll hota hai movies ka wo 
    
    row.className = 'row';
    row.classList.add('netflixrow');
    headrow.appendChild(row);


    const title = document.createElement('h2');
    title.className = 'row_title';
    title.innerText = 'Documentries'
    row.appendChild(title);


    const row_posters = document.createElement('div');
    row_posters.className = 'row_posters';
    row.appendChild(row_posters);
    
    
    data.results.forEach((movie)=>{
        const poster = document.createElement('img');
        poster.className = 'row_posterLarge';

        var s6 = movie.id;

        poster.id = s6;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    })
})





var a = 10;

setTimeout(() => {
    a=20;
    console.log(a);
}, 2000)
