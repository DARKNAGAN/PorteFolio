// Genération des animes API lié  à MyAnimList
var animesElt = document.getElementById("animelist");
ajaxGet("https://api.jikan.moe/v3/user/DARKNAGAN/animelist/completed", function (reponse)
	{
		// Transforme la réponse en un tableau d'articles
		var animes = JSON.parse(reponse);
		animes.anime.sort((a,b) => (a.score< b.score) ? 1 : ((b.score< a.score) ? -1 : 0));
		animes.anime.forEach(function (results)
		{
			// Ajout du titre et du contenu de chaque article
				var divElt = document.createElement("div");
				divElt.className = "col";
				var imageElt = document.createElement("img");
				imageElt.id = "imgMedia";
				imageElt.className = "card-img rounded-top";
				imageElt.src = results.image_url;
				imageElt.alt ="Aucun Aperçu";
				var contenuElt = document.createElement("div");
				contenuElt.className = "card-body text-center";
				var titleElt = document.createElement("p");
				titleElt.innerHTML = results.type;
				var lienElt = document.createElement("a");
				lienElt.href = results.video_url;
				lienElt.target = "_blank";
				lienElt.textContent = results.title;
				animesElt.appendChild(divElt);
				divElt.appendChild(imageElt);
				divElt.appendChild(contenuElt);
				contenuElt.appendChild(titleElt);
				contenuElt.appendChild(lienElt);
		});
	});

// Genération des mangas API lié  à MyAnimList
var mangasElt = document.getElementById("mangalist");
ajaxGet("https://api.jikan.moe/v3/user/DARKNAGAN/mangalist/completed", function (reponse)
	{
		// Transforme la réponse en un tableau d'articles
		var mangas = JSON.parse(reponse);
		mangas.manga.sort((a,b) => (a.score< b.score) ? 1 : ((b.score< a.score) ? -1 : 0));
		mangas.manga.forEach(function (results) 
		{
			// Ajout du titre et du contenu de chaque article
			var divElt = document.createElement("div");
			divElt.className = "col";
			var imageElt = document.createElement("img");
			imageElt.id = "imgMedia";
			imageElt.className = "card-img rounded";
			imageElt.src = results.image_url;
			imageElt.alt ="Aucun Aperçu";
			var contenuElt = document.createElement("div");
			contenuElt.className = "card-body text-center";
			var titleElt = document.createElement("p");
			var lienElt = document.createElement("a");
			lienElt.href = results.url;
			lienElt.target = "_blank";
			lienElt.textContent = results.title;
			mangasElt.appendChild(divElt);
			divElt.appendChild(imageElt);
			divElt.appendChild(contenuElt);
			contenuElt.appendChild(titleElt);
			titleElt.appendChild(lienElt);
		});
	});