// Genération des playlists API lié  à MyAnimList

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
				imageElt.id = "imgMedia";
				imageElt.className = "card-img rounded";
				imageElt.src = results.snippet.thumbnails.default.url;
				imageElt.alt ="Aucun Aperçu";
				var contenuElt = document.createElement("div");
				contenuElt.className = "card-body text-center";
				var titleElt = document.createElement("p");
				var lienElt = document.createElement("a");
				lienElt.href = "https://www.youtube.com/playlist?list="+results.id;
				lienElt.target = "_blank";
				lienElt.textContent = results.snippet.title;
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
			imageElt.id = "imgMedia";
			imageElt.className = "card-img rounded-circle";
			imageElt.src = results.snippet.thumbnails.default.url;
			imageElt.alt ="Aucun Aperçu";
			var contenuElt = document.createElement("div");
			contenuElt.className = "card-body text-center";
			var titleElt = document.createElement("p");
			var lienElt = document.createElement("a");
			lienElt.href = "https://www.youtube.com/channel/"+results.snippet.resourceId.channelId;
			lienElt.target = "_blank";
			lienElt.textContent = results.snippet.title;
			artistesElt.appendChild(divElt);
			divElt.appendChild(imageElt);
			divElt.appendChild(contenuElt);
			contenuElt.appendChild(titleElt);
			titleElt.appendChild(lienElt);
		});
	});