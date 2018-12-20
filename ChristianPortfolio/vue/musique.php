<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Portfolio</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
	</head>
	<body>
	<style>
		.bg-1 {	background: #2d2d30; color: #bdbdbd; }
	</style>
		<div class="bg-1">  
			<div id="pro" class="container">
			<center><h1>Mes artistes préférer</h1></center><br>
			<div id="musiquelist" class="row"></div>
			<!--Non connecter-->
			<div id="login">
			<center><h3><a id="login-button" class="btn btn-primary">Se connecter</a></h3><center><br>
			</div>
				<!--Connecter-->
				<div id="loggedin">
					<div id="user-profile">
						<script id="musiquesElt" type="text/x-handlebars-template">
						{{#each artists.items}}
							<div class="col-2">
								<img class="card-img" src="{{images.0.url}}" height="160" alt="Aucun Aperçu">
								<center><div class="card-body"><h5><a href="{{external_urls.spotify}}" target="_blank">{{name}}</a></h5></div></center>
							</div>
						{{/each}}
						</script>
					</div>
				</div>
			</div>
		</div>
	<footer class="text-center">
		<a class="up-arrow" href="#accueil" data-toggle="tooltip" title="HAUT DU SITE">
			<span class="glyphicon glyphicon-chevron-up"></span>
		</a><br>
	</footer>
		<script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.1/handlebars.min.js"></script>
		<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		<script type="text/javascript" src="../js/spotify.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	</body>
</html>