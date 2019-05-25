<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>Portfolio</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
		<link rel="stylesheet" href="../css/style.css" media="all" type="text/css"> 
	</head>
	<body id="myPage" data-spy="scroll" data-target=".navbar" data-offset="50">
			<div class="container modal-body text-center">
			<h3 class="bg-dark text-light py-3">Mes artistes préférer</h3>
			<div id="musiquelist" class="row py-2"></div>
			<!--Non connecter-->
			<div id="login">
			<h5><a id="login-button" class="btn btn-primary">Connexion</a></h5>
			</div>
				<!--Connecter-->
				<div id="loggedin">
					<div id="user-profile">
						<script id="musiquesElt" type="text/x-handlebars-template">
						{{#each artists.items}}
							<div class="col">
									<img id="imgMedia" class="card-img rounded-circle" src="{{images.0.url}}" alt="Aucun Apperçu">
									<div class="card-body text-center">
										<p><a class="mo-info-name" title="{{name}}" href="{{external_urls.spotify}}" target="_blank">{{name}}</a></p>
									</div>
							</div>
						{{/each}}
						</script>
					</div>
				</div>
			</div>
		<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
		<script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.1/handlebars.min.js"></script>
		<script type="text/javascript" src="../js/spotify.js"></script>
	</body>
</html>