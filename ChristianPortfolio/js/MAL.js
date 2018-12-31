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
				divElt.className = "col-2";		
				
				var imageElt = document.createElement("img");	
				imageElt.className = "card-img";	
				imageElt.src = results.image_url;	
				imageElt.alt ="Aucun Aperçu";
				
				var contenuElt = document.createElement("div");
				contenuElt.className = "card-body";	
				
				var centerElt = document.createElement("center");
				
				var titleElt = document.createElement("h5");
				titleElt.className = "card-title";	
				titleElt.innerHTML = results.type +"<br>";
				
				var lienElt = document.createElement("a");
				lienElt.href = results.video_url;	
				lienElt.target = "_blank";	
				lienElt.textContent = results.title;
				
				animesElt.appendChild(divElt);
				divElt.appendChild(imageElt);
				divElt.appendChild(contenuElt);
				contenuElt.appendChild(centerElt);
				centerElt.appendChild(titleElt);
				titleElt.appendChild(lienElt);
				
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
			divElt.className = "col-3";	
			
			var imageElt = document.createElement("img");	
			imageElt.className = "card-img-top";	
			imageElt.src = results.image_url;	
			imageElt.alt ="Aucun Aperçu";
			
			var contenuElt = document.createElement("div");
			contenuElt.className = "card-body";	
			
			var centerElt = document.createElement("center");
			
			var titleElt = document.createElement("h5");
			titleElt.className = "card-title";	
			
			var lienElt = document.createElement("a");
			lienElt.href = results.url;	
			lienElt.target = "_blank";	
			lienElt.textContent = results.title;
			
			mangasElt.appendChild(divElt);
			divElt.appendChild(imageElt);
			divElt.appendChild(contenuElt);
			contenuElt.appendChild(centerElt);
			centerElt.appendChild(titleElt);
			titleElt.appendChild(lienElt);
		});
	});
