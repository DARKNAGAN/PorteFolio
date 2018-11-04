// Genération des animes API lié  à MyAnimList

var animesElt = document.getElementById("animelist");
ajaxGet("https://api.jikan.moe/v3/user/DARKNAGAN/animelist/completed", function (reponse) {
// Transforme la réponse en un tableau d'articles
    var animes = JSON.parse(reponse);
    animes.anime.forEach(function (results) {
				console.log(results.title);
// Ajout du titre et du contenu de chaque article
		var divElt = document.createElement("div");
		divElt.className = "col-2";		
		var imageElt = document.createElement("img");	
		imageElt.className = "card-img";	
		imageElt.src = results.image_url;	
		imageElt.alt ="Aucun Aperçu";
		var contenuElt = document.createElement("div");
		contenuElt.className = "card-body";	
        var titleElt = document.createElement("h5");
		titleElt.className = "card-title";	
		titleElt.textContent = results.type + " | " + results.title;
		var descElt = document.createElement("p");
		descElt.className = "card-text";	
		var lienElt = document.createElement("a");
		lienElt.href = results.video_url;	
		lienElt.target = "_blank";	
		lienElt.textContent = "Lien vers la bande annonce";
		animesElt.appendChild(divElt);
        divElt.appendChild(imageElt);
        divElt.appendChild(contenuElt);
		contenuElt.appendChild(titleElt);
		contenuElt.appendChild(descElt);
		descElt.appendChild(lienElt);
    });
});

// Genération des mangas API lié  à MyAnimList
var mangasElt = document.getElementById("mangalist");
ajaxGet("https://api.jikan.moe/v3/user/DARKNAGAN/mangalist/completed", function (reponse) {
// Transforme la réponse en un tableau d'articles
    var mangas = JSON.parse(reponse);
    mangas.anime.forEach(function (results) {
				console.log(results.title);
// Ajout du titre et du contenu de chaque article
		var divElt = document.createElement("div");
		divElt.className = "col-3";	
		var imageElt = document.createElement("img");	
		imageElt.className = "card-img-top";	
		imageElt.src = results.image_url;	
		imageElt.alt ="Aucun Aperçu";
		var contenuElt = document.createElement("div");
		contenuElt.className = "card-body";	
        var titleElt = document.createElement("h3");
		titleElt.className = "card-title";	
		titleElt.textContent = results.type + " | " + results.title;
		var descElt = document.createElement("p");
		var lienElt = document.createElement("a");
		descElt.className = "card-text";	
		lienElt.href = results.video_url;	
		lienElt.target = "_blank";	
		lienElt.textContent = "Lien vers la bande annonce";
		mangasElt.appendChild(divElt);
        divElt.appendChild(imageElt);
        divElt.appendChild(contenuElt);
		contenuElt.appendChild(titleElt);
		contenuElt.appendChild(descElt);
		descElt.appendChild(lienElt);
    });
});
