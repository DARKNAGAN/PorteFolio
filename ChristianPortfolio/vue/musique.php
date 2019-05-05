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
			.mo-info-name {
			font-size: 14px;
			line-height: 20px;
			letter-spacing: .015em;
			font-weight: var(--glue-font-weight-bold);
			color: #fff;
			text-transform: none;
			}
		.media-object { position: relative; padding-bottom: 2.5em; }
		.mo-info {
			margin: 12px 0 4px;
			width: 100%;
			overflow: hidden;
			text-overflow: ellipsis;
			text-align: center;
			display: block;
			}
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
							<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
								<div class="media-object" style="max-width: 300px;">
									<img class="card-img" src="{{images.0.url}}" style="height: 160px; width: 100%; border-radius: 50%;">
									<div class="mo-info">
										<a class="mo-info-name" title="{{name}}" href="{{external_urls.spotify}}" target="_blank">{{name}}</a>
									</div>
								</div>
							</div>
						{{/each}}
						</script>
					</div>
				</div>
			</div>
		</div>
	<footer class="text-center">
		<a class="up-arrow" href="#accueil" data-toggle="tooltip" title="HAUT DU SITE">
			<span class="fa fa-toggle-up"></span>
		</a><br>
	</footer>
		<script src="//cdnjs.cloudflare.com/ajax/libs/handlebars.js/2.0.0-alpha.1/handlebars.min.js"></script>
		<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
		<script type="text/javascript" src="../js/spotify.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
	</body>
</html>