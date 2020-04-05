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
// Genération des Playlists API lié  à YouTube
var playlistsElt = document.getElementById("playlistlist");
ajaxGet("https://www.googleapis.com/youtube/v3/playlists?part=snippet&fields=items(id,snippet/thumbnails/default/url,snippet/title)&maxResults=15&channelId=UCN8b7ygGwvwDO5dWH0D_8bA&key=AIzaSyAqPAG5gb8a0d-L1VJeCBJNapspvFcTDPI", function (reponse) 
	{
		// Transforme la réponse en un tableau d'articles
		var playlists = JSON.parse(reponse);
		var i=0
		playlists.items.forEach(function (playlist)
		{
		// Ajout du titre et du contenu de chaque article
		var breakElt = document.createElement("div");	breakElt.className = "w-100 d-none d-md-block";
		var colElt = document.createElement("div");		colElt.className = "col";
		var cardElt = document.createElement("div");	cardElt.className = "card-body";
		var lienElt = document.createElement("a");		lienElt.href = "https://www.youtube.com/playlist?list="+playlist.id;	lienElt.target = "_blank";	lienElt.rel = "noopener";
		var titleElt = document.createElement("p");	titleElt.textContent = playlist.snippet.title;
		var imageElt = document.createElement("img");	imageElt.class = "imgMedia";	imageElt.className = "rounded-top";	imageElt.src = playlist.snippet.thumbnails.default.url;
			
		//Présentation
		if (i==3) {
			playlistsElt.appendChild(breakElt);
			i=1;
		}	else{i=i+1;}
		playlistsElt.appendChild(colElt);
		colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
				lienElt.appendChild(titleElt);
				lienElt.appendChild(imageElt);
		});
	});
// Genération des artistes API lié  à YouTube
var artistesElt = document.getElementById("artistelist");
ajaxGet("https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items(id,snippet/title,snippet/thumbnails/default/url)&id=UCK7wTMguyPyPCjhLoOK2rJg%2CUCE8NoMFnai3tTuwdiQJ-78A%2CUCJhe07czqzg4UzpjvQWkmMQ%2CUCv8xpzILpS2IKEd8CUuGd-Q%2CUCAHPhykku172s6dUnSs0fAQ%2CUCafwZLzPO4nZrEA8061AXTg%2CUCyC_4jvPzLiSkJkLIkA7B8g%2CUCv8xpzILpS2IKEd8CUuGd-Qsta%2CUCk20cSRhH_ms_Yk1AZItFqA%2CUCYEIC1WKHEJHR971HIySQMg&key=AIzaSyAqPAG5gb8a0d-L1VJeCBJNapspvFcTDPI", function (reponse) 
	{
		// Transforme la réponse en un tableau d'articles
		var artistes = JSON.parse(reponse);
		artistes.items.forEach(function (artist) 
		{
		// Ajout du titre et du contenu de chaque article
		var breakElt = document.createElement("div");	breakElt.className = "w-100 d-none d-md-block";
		var colElt = document.createElement("div");		colElt.className = "col";
		var cardElt = document.createElement("div");	cardElt.className = "card-body";
		var lienElt = document.createElement("a");		lienElt.href = "https://www.youtube.com/channel/"+artist.id;	lienElt.target = "_blank";	lienElt.rel = "noopener";
		var titleElt = document.createElement("p");	titleElt.textContent = artist.snippet.title;
		var imageElt = document.createElement("img");	imageElt.class = "imgMedia";	imageElt.className = "rounded-circle border border-secondary";	imageElt.src = artist.snippet.thumbnails.default.url;

		//Présentation
		artistesElt.appendChild(colElt);
		colElt.appendChild(cardElt);
			cardElt.appendChild(lienElt);
				lienElt.appendChild(imageElt);
				lienElt.appendChild(titleElt);
		});
	});
// Genération des Games API lié  à IGDB
var gamesElt = document.getElementById("gamelist");
var settings = {
	"url": "https://api-v3.igdb.com/private/lists/",
	"method": "GET",
	"timeout": 0,
	"headers": {
	  "user-key": "e04bb979cfd7871e7bc3f2b6724096f4",
	  "Content-Type": "text/plain"
	},
	"data": "fields name,listed_games.name, listed_games.cover.url, listed_games.url ; where id = 41173;",
  };
ajaxGet("https://api-v3.igdb.com/private/lists", function (reponse)
	{		console.log(reponse)
		// Transforme la réponse en un tableau d'articles
		var games = JSON.parse(reponse);
		var i=0
		console.log(games)
		games.game.forEach(function (game) 
		{
			// Ajout du titre et du contenu de chaque article
			var breakElt = document.createElement("div");	breakElt.className = "w-100 d-none d-md-block";
			var colElt = document.createElement("div");		colElt.className = "col";
			var cardElt = document.createElement("div");	cardElt.className = "card-body";
			var lienElt = document.createElement("a");		lienElt.href = game.url;	lienElt.target = "_blank";	lienElt.rel = "noopener";
			var titleElt = document.createElement("p");		titleElt.textContent = game.title;
			var imageElt = document.createElement("img");	imageElt.className = "img-thumbnail"; imageElt.src = game.image_url;	imageElt.alt ="Aucun Aperçu";
			//Présentation
			if (i==4) {
				gamesElt.appendChild(breakElt);
				i=1;
			}	else{i=i+1;}
			gamesElt.appendChild(colElt);
			colElt.appendChild(cardElt);
				cardElt.appendChild(lienElt);
					lienElt.appendChild(titleElt);
					lienElt.appendChild(imageElt);
		});
	});
	var settings = {
		"url": "https://api-v3.igdb.com/private/lists",
		"method": "GET",
		"timeout": 0,
		"headers": {
		  "user-key": "b3f88f75f188fa6b86c70fcd8f75b223",
		  "Content-Type": "text/plain"
		},
		"data": "fields name,listed_games.name, listed_games.cover.url, listed_games.url ; where id = 41173;",
	  };
	  
	  $.ajax(settings).done(function (response) {
		console.log(response);
	  });