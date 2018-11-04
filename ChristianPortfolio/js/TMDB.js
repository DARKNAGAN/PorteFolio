// Genération des films API lié  à TheMovieDB
 
var filmsElt = document.getElementById("filmlist");
ajaxGet("https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=1fe1f40f8caa40ec8eae516812d6597b&language=en-US&session_id=227349c28780f153228f3ad1efc4a6783a930639&sort_by=created_at.asc&page=1", function (reponse) {
// Transforme la réponse en un tableau d'articles
    var movies = JSON.parse(reponse);
    movies.results.forEach(function (results) {
				console.log(results.original_title);
// Ajout du titre et du contenu de chaque article
		var divElt = document.createElement("div");
		divElt.className = "col-2";	
		var imageElt = document.createElement("img");	
		imageElt.className = "card-img";	
		imageElt.src = "https://image.tmdb.org/t/p/w150_and_h225_bestv2/" +results.poster_path;	
		imageElt.alt ="Aucun Aperçu";
		var contenuElt = document.createElement("div");
		contenuElt.className = "card-body";	
        var titleElt = document.createElement("h5");
		titleElt.className = "card-title";	
		titleElt.textContent = results.original_title;
		var descElt = document.createElement("p");
		descElt.textContent = results.title;
		descElt.className = "card-text";	
		filmsElt.appendChild(divElt);
        divElt.appendChild(imageElt);
        divElt.appendChild(contenuElt);
		contenuElt.appendChild(titleElt);
		contenuElt.appendChild(descElt);
    });
});

// Genération des serie API lié  à TheMovieDB
var seriesElt = document.getElementById("serielist");
ajaxGet("https://api.themoviedb.org/3/account/{account_id}/rated/tv?api_key=1fe1f40f8caa40ec8eae516812d6597b&language=fr-FR&session_id=227349c28780f153228f3ad1efc4a6783a930639", function (reponse) {
// Transforme la réponse en un tableau d'articles
    var tv = JSON.parse(reponse);
    tv.results.forEach(function (results) {
// Ajout du titre et du contenu de chaque article
		var divElt = document.createElement("div");
		divElt.className = "col-2";	
		divElt.style.float = "left";	
		var imageElt = document.createElement("img");	
		imageElt.className = "card-img";	
		imageElt.src = "https://image.tmdb.org/t/p/w150_and_h225_bestv2" +results.poster_path;	
		imageElt.alt ="Aucun Aperçu";
		var contenuElt = document.createElement("div");
		contenuElt.className = "card-body";	
        var titleElt = document.createElement("h5");
		titleElt.className = "card-title";	
		titleElt.textContent = results.original_name;
		var descElt = document.createElement("p");
		descElt.textContent = results.name;
		descElt.className = "card-text";	
		seriesElt.appendChild(divElt);
        divElt.appendChild(imageElt);
        divElt.appendChild(contenuElt);
		contenuElt.appendChild(titleElt);
		contenuElt.appendChild(descElt);
    });
});
