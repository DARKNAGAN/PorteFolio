// Genération des films API lié  à TheMovieDB
var filmsElt = document.getElementById("filmlist");
ajaxGet("https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=1fe1f40f8caa40ec8eae516812d6597b&language=fr-FR&session_id=227349c28780f153228f3ad1efc4a6783a930639&sort_by=account_rating&sort_order=asc", function (reponse) 
	{
		// Transforme la réponse en un tableau d'articles
		var movies = JSON.parse(reponse);
		movies.results.sort((a,b) => (a.rating< b.rating) ? 1 : ((b.rating< a.rating) ? -1 : 0));
		movies.results.forEach(function (results) 
		{
				// Ajout du titre et du contenu de chaque article
				var divElt = document.createElement("div");
				divElt.className = "col";
				var imageElt = document.createElement("img");
				imageElt.id = "imgMedia";
				imageElt.className = "card-img rounded-top";
				imageElt.src = "https://image.tmdb.org/t/p/w150_and_h225_bestv2/" +results.poster_path;
				var contenuElt = document.createElement("div");
				contenuElt.className = "card-body text-center";
				var titleElt = document.createElement("p");
				titleElt.textContent = results.title;
				filmsElt.appendChild(divElt);
				divElt.appendChild(imageElt);
				divElt.appendChild(contenuElt);
				contenuElt.appendChild(titleElt);
		});
	});
// Genération des serie API lié  à TheMovieDB
var seriesElt = document.getElementById("serielist");
ajaxGet("https://api.themoviedb.org/3/account/{account_id}/rated/tv?api_key=1fe1f40f8caa40ec8eae516812d6597b&language=fr-FR&session_id=227349c28780f153228f3ad1efc4a6783a930639&sort_by=account_rating&sort_order=asc", function (reponse)
	{
		// Transforme la réponse en un tableau d'articles
		var tv = JSON.parse(reponse);
		tv.results.sort((a,b) => (a.rating< b.rating) ? 1 : ((b.rating< a.rating) ? -1 : 0)); 
		tv.results.forEach(function (results) 
		{
			// Ajout du titre et du contenu de chaque article
			var divElt = document.createElement("div");
			divElt.className = "col";
			var imageElt = document.createElement("img");
			imageElt.id = "imgMedia";
			imageElt.className = "card-img rounded-top";
			imageElt.src = "https://image.tmdb.org/t/p/w150_and_h225_bestv2" +results.poster_path;
			var contenuElt = document.createElement("div");
			contenuElt.className = "card-body text-center";
			var titleElt = document.createElement("p");
			titleElt.textContent = results.name;
			seriesElt.appendChild(divElt);
			divElt.appendChild(imageElt);
			divElt.appendChild(contenuElt);
			contenuElt.appendChild(titleElt);
		});
	});