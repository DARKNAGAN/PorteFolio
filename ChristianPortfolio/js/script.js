// Switch Page
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip(); 
	$(".navbar a, footer a[href='#accueil']").on('click', function(event) {
	event.preventDefault();
	var hash = this.hash;
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 900, function(){
		window.location.hash = hash;
		});
	});
})
// Genération des Animes API lié  à MyAnimList
var animesElt = document.getElementById("animelist");
ajaxGet("https://api.jikan.moe/v3/user/DARKNAGAN/animelist/completed", function (reponse)
	{
		// Definition
		var animes = JSON.parse(reponse);
		var bestanime = animes.anime.sort((a,b) => (a.score< b.score) ? 1 : ((b.score< a.score) ? -1 : 0));
		var i=0
		bestanime.forEach(function (anime)
		{
		// Ajout du titre et du contenu de chaque article
		var breakElt = document.createElement("div");	breakElt.className = "w-100 d-none d-md-block";
		var colElt = document.createElement("div");		colElt.className = "col";
		var cardElt = document.createElement("div");	cardElt.className = "card-body";
		var lienElt = document.createElement("a");		lienElt.href = anime.url;	lienElt.target = "_blank";	lienElt.rel = "noopener";
		var titleElt = document.createElement("p");		titleElt.textContent = anime.title;
		var imageElt = document.createElement("img");	imageElt.className = "img-thumbnail";imageElt.src = anime.image_url;imageElt.alt ="Aucun Aperçu";
		var infoElt = document.createElement("div");	infoElt.className = "row";
		var infotypeElt = document.createElement("div");infotypeElt.className = "col";
		var infonoteElt = document.createElement("div");infonoteElt.className = "col";
		var typeElt = document.createElement("p");		typeElt.innerHTML = anime.type;
		var noteElt = document.createElement("p");		noteElt.innerHTML = anime.score+"/10";
		//Présentation
		if (i==3) {
			animesElt.appendChild(breakElt);
			i=1;
		}	else{i=i+1;}
		animesElt.appendChild(colElt);
		colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
				lienElt.appendChild(titleElt);
				lienElt.appendChild(imageElt);
			cardElt.appendChild(infoElt);
				infoElt.appendChild(infotypeElt);
				infoElt.appendChild(infonoteElt);
					infotypeElt.appendChild(typeElt);
					infonoteElt.appendChild(noteElt);	
		});
	});
// Genération des Mangas API lié  à MyAnimList
var mangasElt = document.getElementById("mangalist");
ajaxGet("https://api.jikan.moe/v3/user/DARKNAGAN/mangalist/completed", function (reponse)
	{
		// Transforme la réponse en un tableau d'articles
		var mangas = JSON.parse(reponse);
		var i=0
		mangas.manga.forEach(function (manga) 
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");	breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");		colElt.className = "col";
			var cardElt = document.createElement("div");	cardElt.className = "card-body";
			var lienElt = document.createElement("a");		lienElt.href = manga.url;	lienElt.target = "_blank";	lienElt.rel = "noopener";
			var titleElt = document.createElement("p");		titleElt.textContent = manga.title;
			var imageElt = document.createElement("img");	imageElt.className = "img-thumbnail"; imageElt.src = manga.image_url;	imageElt.alt ="Aucun Aperçu";
			//Présentation
			if (i==4) {
				mangasElt.appendChild(breakElt);
				i=1;
			}	else{i=i+1;}
			mangasElt.appendChild(colElt);
			colElt.appendChild(cardElt);
				cardElt.appendChild(lienElt);
					lienElt.appendChild(titleElt);
					lienElt.appendChild(imageElt);
		});
	});
	// Genération des Films API lié  à TheMovieDB
var moviesElt = document.getElementById("filmlist");
var links = "https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=1fe1f40f8caa40ec8eae516812d6597b&language=fr-FR&session_id=227349c28780f153228f3ad1efc4a6783a930639&sort_by=account_rating&sort_order=asc&page=";
var number = 1;
for (number;number <= 8; number++)
{
ajaxGet("https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=1fe1f40f8caa40ec8eae516812d6597b&language=fr-FR&session_id=227349c28780f153228f3ad1efc4a6783a930639&sort_by=account_rating&sort_order=asc&page="+number, function (reponse) 
	{
		// Definition
		var movies = JSON.parse(reponse);
		var i=0
		var bestmovies = movies.results.sort((a,b) => (a.rating< b.rating) ? 1 : ((b.rating< a.rating) ? -1 : 0));
		bestmovies.forEach(function (results) 
		{
		// Ajout du titre et du contenu de chaque article
				var breakElt = document.createElement("div");	breakElt.className = "w-100 d-none d-md-block";
				var colElt = document.createElement("div");		colElt.className = "col";
				var cardElt = document.createElement("div");	cardElt.className = "card-body";
				var lienElt = document.createElement("a");		lienElt.href = "//www.themoviedb.org/movie/"+results.id;	lienElt.target = "_blank";	lienElt.rel = "noopener";
				var titleElt = document.createElement("p");	titleElt.textContent = results.original_title;
				var imageElt = document.createElement("img");	imageElt.class = "imgMedia";	imageElt.className = "rounded-top";	imageElt.src = "https://image.tmdb.org/t/p/w150_and_h225_bestv2/" +results.poster_path;	
				var infoElt = document.createElement("div");	infoElt.className = "row";
				var infotypeElt = document.createElement("div");infotypeElt.className = "col";
				var infonoteElt = document.createElement("div");infonoteElt.className = "col";
				var dateElt = document.createElement("p");		dateElt.innerHTML = results.release_date.slice(0,4);
				var noteElt = document.createElement("p");		noteElt.innerHTML = results.rating+"/10";
		//Présentation
		if (i==3) {
					moviesElt.appendChild(breakElt);
					i=1;
				}	else{i=i+1;}
				moviesElt.appendChild(colElt);
				colElt.appendChild(cardElt);
					cardElt.appendChild(lienElt);
						lienElt.appendChild(titleElt);
						lienElt.appendChild(imageElt);
					cardElt.appendChild(infoElt);
						infoElt.appendChild(infotypeElt);
						infoElt.appendChild(infonoteElt);
							infotypeElt.appendChild(dateElt);
							infonoteElt.appendChild(noteElt);	
		});
	});
}
// Genération des Series API lié  à TheMovieDB
var seriesElt = document.getElementById("serielist");
ajaxGet("https://api.themoviedb.org/3/account/{account_id}/rated/tv?api_key=1fe1f40f8caa40ec8eae516812d6597b&language=fr-FR&session_id=227349c28780f153228f3ad1efc4a6783a930639&sort_by=account_rating&sort_order=asc", function (reponse)
	{
		// Definition
		var series = JSON.parse(reponse);
		var i=0
		var bestseries = series.results.sort((a,b) => (a.rating< b.rating) ? 1 : ((b.rating< a.rating) ? -1 : 0));
		bestseries.forEach(function (results) 
		{
		// Ajout du titre et du contenu de chaque article
		var breakElt = document.createElement("div");	breakElt.className = "w-100 d-none d-md-block";
		var colElt = document.createElement("div");		colElt.className = "col";
		var cardElt = document.createElement("div");	cardElt.className = "card-body";
		var lienElt = document.createElement("a");		lienElt.href = "//www.themoviedb.org/tv/"+results.id;	lienElt.target = "_blank";	lienElt.rel = "noopener";
		var titleElt = document.createElement("p");	titleElt.textContent = results.original_name;
		var imageElt = document.createElement("img");	imageElt.class = "imgMedia";	imageElt.className = "rounded-top";	imageElt.src = "https://image.tmdb.org/t/p/w150_and_h225_bestv2/" +results.poster_path;	
		var infoElt = document.createElement("div");	infoElt.className = "row";
		var infonoteElt = document.createElement("div");infonoteElt.className = "col";
		var noteElt = document.createElement("p");		noteElt.innerHTML = results.rating+"/10";
//Présentation
if (i==3) {
			seriesElt.appendChild(breakElt);
			i=1;
		}	else{i=i+1;}
		seriesElt.appendChild(colElt);
		colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
				lienElt.appendChild(titleElt);
				lienElt.appendChild(imageElt);
			cardElt.appendChild(infoElt);
				infoElt.appendChild(infonoteElt);
					infonoteElt.appendChild(noteElt);	
		});
	});
// Genération des Playlists API lié  à MyAnimList
var playlistsElt = document.getElementById("playlistlist");
ajaxGet("https://www.googleapis.com/youtube/v3/playlists?part=snippet&fields=items(id,snippet/thumbnails/default/url,snippet/title)&maxResults=15&channelId=UCN8b7ygGwvwDO5dWH0D_8bA&key=AIzaSyAQUW9XssG4BiRdUJdf2hR3mBkxfpSIk_4", function (reponse) 
	{
		// Transforme la réponse en un tableau d'articles
		var playlists = JSON.parse(reponse);
		playlists.items.forEach(function (results)
		{
			// Ajout du titre et du contenu de chaque article
				var divElt = document.createElement("div");
				divElt.className = "col";
				var imageElt = document.createElement("img");
				imageElt.class = "imgMedia";
				imageElt.className = "rounded";
				imageElt.src = results.snippet.thumbnails.default.url;
				imageElt.alt ="Aucun Aperçu";
				var contenuElt = document.createElement("div");
				contenuElt.className = "card-body text-center";
				var titleElt = document.createElement("p");
				var lienElt = document.createElement("a");
				lienElt.href = "https://www.youtube.com/playlist?list="+results.id;
				lienElt.target = "_blank";
				lienElt.rel = "noopener";
				lienElt.textContent = results.snippet.title;
				//Présentation
				playlistsElt.appendChild(divElt);
				divElt.appendChild(imageElt);
				divElt.appendChild(contenuElt);
				contenuElt.appendChild(titleElt);
				titleElt.appendChild(lienElt);
		});
	});
// Genération des artistes API lié  à MyAnimList
var artistesElt = document.getElementById("artistelist");
ajaxGet("https://www.googleapis.com/youtube/v3/subscriptions?part=snippet&fields=items(snippet/title,snippet/thumbnails/default/url,snippet/resourceId/channelId)&maxResults=50&channelId=UCN8b7ygGwvwDO5dWH0D_8bA&key=AIzaSyAQUW9XssG4BiRdUJdf2hR3mBkxfpSIk_4", function (reponse) 
	{
		// Transforme la réponse en un tableau d'articles
		var artistes = JSON.parse(reponse);
		artistes.items.forEach(function (results) 
		{
			// Ajout du titre et du contenu de chaque article
			var divElt = document.createElement("div");
			divElt.className = "col";
			var imageElt = document.createElement("img");
			imageElt.class = "imgMedia";
			imageElt.className = "rounded-circle";
			imageElt.src = results.snippet.thumbnails.default.url;
			imageElt.alt ="Aucun Aperçu";
			var contenuElt = document.createElement("div");
			contenuElt.className = "card-body text-center";
			var titleElt = document.createElement("p");
			var lienElt = document.createElement("a");
			lienElt.href = "https://www.youtube.com/channel/"+results.snippet.resourceId.channelId;
			lienElt.target = "_blank";
			lienElt.rel = "noopener";
			lienElt.textContent = results.snippet.title;
			//Présentation
			artistesElt.appendChild(divElt);
			divElt.appendChild(imageElt);
			divElt.appendChild(contenuElt);
			contenuElt.appendChild(titleElt);
			titleElt.appendChild(lienElt);
		});
	});