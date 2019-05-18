		<div id="hoobie" class="container-fluid text-center py-5">
			<h1>HOOBIES</h1><br><br><br>
			<div class="row">
				<div class="col">
					<img id="imgHoobies" src="./images/hobbie/sport.png" alt="sport" class="rounded-circle"><h2>Sport</h2>
					<h4>Equitation Galop 4</h4>
					<h4>Salle de sport</h4>
					<h4>Course à pied</h4>
				</div>
				<div class="col">
					<img id="imgHoobies" src="./images/hobbie/culture.png" alt="culture" class="rounded-circle"><h2>Culture</h2>
					<h4>High-Tech</h4>
					<h4>Audiophile</h4>
					<h4>Piano en Autodidacte</h4>
					<h4><a href="https://www.facebook.com/BD3AFDME/" target="_blank">Association BD3A</a></h4>
					
				</div>
				<div class="col">
					<img id="imgHoobies" src="./images/hobbie/multimedia.png" alt="multimedia" class="rounded-circle">
					<h2>Multimédia</h2>
					<h4><a data-toggle="modal" href="#collapseHoobieOne">Animé - Light novel</a></h4>
					<div id="collapseHoobieOne" class="modal animated slideInUp" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
						<div class="modal-header bg-light">
							<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body text-dark">
							<div class="container text-center">
								<h3 class="bg-dark text-light py-3">Série et film d'animation visionné</h3>
									<div id="animelist" class="row py-2"></div>
								<h3 class="bg-dark text-light py-3">Light novel lu</h3>
									<div id="mangalist" class="row py-2"></div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<h4><a data-toggle="modal" href="#collapseHoobieTwo">Films</a></h4>
					<div id="collapseHoobieTwo" class="modal animated slideInUp" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
						<div class="modal-header bg-light">
							<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body text-dark">
							<div class="container text-center">
								<h3 class="bg-dark text-light py-3">Film visionné</h3>
									<div id="filmlist" class="row py-2"></div>
								<h3 class="bg-dark text-light py-3">Séries suivie</h3>
									<div id="serielist" class="row py-2"></div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<h4><a href="https://steamcommunity.com/id/darknagan/games/?tab=all" target="_blank">Jeux</a></h4>
					<h4><a id="login-button" href="/ChristianPortfolio/vue/spotify.php" target="_blank">Musique</a> & <a data-toggle="modal" href="#collapseHoobieFour">Vidéo</a></h4>
					<div id="collapseHoobieFour" class="modal animated slideInUp" role="dialog">
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
						<div class="modal-header bg-light">
							<button type="button" class="close text-dark" data-dismiss="modal">&times;</button>
						</div>
						<div class="modal-body text-dark">
							<div class="container text-center">
								<h3 class="bg-dark text-light py-3">Playlists musicale</h3>
									<div id="playlistlist" class="row  py-2"></div>
								<h3 class="bg-dark text-light py-3">Artistes favoris</h3>
									<div id="artistelist" class="row  py-2"></div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
			</div><br><br><br>
			<div class="row">
			<div class="col">
				<button class="btn btn-dark btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseEvent" aria-expanded="true" aria-controls="collapseEvent">Evènements</button>
					<div class="collapse"  id="collapseEvent">
						<div class="card-body bg-dark">
							<ul class="list-group list-group-flush overflow-auto m-3">
								<li class="list-group-item"><h4>Concert Starset</h4><h5>04 avril 2018</h5></li>
								<li class="list-group-item"><h4>Concert Thirty Seconds to Mars</h5><h5>14 mars 2018</h5></li>
								<li class="list-group-item"><h4>Elektric Park Festival</h4><h5>09 septembre 2017</h5></li>
								<li class="list-group-item"><h4>Japan Expo 18e Impact</h4><h5>07 juillet 2017</h5></li>
								<li class="list-group-item"><h4>Concert Skillet</h4><h5>06 novembre 2016</h5></li>
								<li class="list-group-item"><h4>Techno Parade</h4><h5>24 septembre 2016</h5></li>
								<li class="list-group-item"><h4>Inox Park Festival</h4><h5>03 septembre 2016</h5></li>
								<li class="list-group-item"><h4>DreamHack Tours</h4><h5>15 mai 2016</h5></li>
								<li class="list-group-item"><h4>Mondial de l'Automobile</h4><h5>19 octobre 2014</h5></li>
								<li class="list-group-item"><h4>Paris Games Week</h4><h5>02 novembre 2013</h5></li>
								<li class="list-group-item"><h4>Paris Games Week</h4><h5>01 novembre 2012</h5></li>
								<li class="list-group-item"><h4>Mondial de l'Automobile</h4><h5>01 octobre 2012</h5></li>
								<li class="list-group-item"><h4>Salon du Cheval de Paris</h4><h5>10 décembre 2011</h5></li>
							</ul>
						</div>
					</div>
					</div>
					<div class="col">
				<button class="btn btn-dark btn-lg btn-block" type="button" data-toggle="collapse" data-target="#collapseEventSport" aria-expanded="true" aria-controls="collapseEventSport">Evènements sportifs</button>
					<div class="collapse" id="collapseEventSport">
						<div class="card-body bg-dark">
							<ul class="list-group list-group-flush overflow-auto m-3">
								<li class="list-group-item"><h4>Galop 4</h4><h5>29 décembre 2018</h5></li>
								<li class="list-group-item"><h4>Stage Equitation Lamotte-Beuvron</h4><h5>30-04 aout 2018</h5></li>
								<li class="list-group-item"><h4>10 km Ultra Trail de Côte-d'Or</h4><h5>26 Mai 2018</h5></li>
								<li class="list-group-item"><h4>10 km Foulées Etampoises</h4><h5>18 février 2018</h5></li>
								<li class="list-group-item"><h4>Galop 3</h4><h5>29 décembre 2017</h5></li>
								<li class="list-group-item"><h4>10 km Ronde du Lac</h4><h5>08 octobre 2017</h5></li>
								<li class="list-group-item"><h4>Stage Equitation Lamotte-Beuvron<br>31-05 aout 2017</h5></li>
								<li class="list-group-item"><h4>10 km La Ronde des Etangs</h4><h5>21 mai 2017</h5></li>
								<li class="list-group-item"><h4>10 km Buthiers Running Finisher Obstacles<br>14 mai 2017</h5></li>
								<li class="list-group-item"><h4>Galop 2</h4><h5> 5 janvier 2017</h5></li>
								<li class="list-group-item"><h4>Galop 1</h4><h5> 8 mars 2016</h5></li>
							</ul> 
						</div>
					</div>
					</div>
			</div><br><br><br>
			<div class="row">
				<div class="col">
					<a href="https://fr.linkedin.com/in/christian-cunatbrule" target="_blank"><img id="logoSocial" src="./images/social/linkedin.png" alt="linkedin"/></a>
					<a href="https://github.com/DARKNAGAN" target="_blank"><img id="logoSocial" src="./images/social/github.png" alt="github"/></a>
					<a href="mailto:ccunatbrule@gmail.com"><img id="logoSocial" src="./images/social/google.png" alt="google"/></a>
					<a href="mailto:christiancheval@live.fr"><img id="logoSocial" src="./images/social/microsoft.png" alt="microsoft"/></a>
					<h2>Professionnel</h2>
				</div>
				<div class="col">
					<a href="https://www.facebook.com/christian.cunatbrule" target="_blank"><img id="logoSocial" src="./images/social/facebook.png" alt="facebook"/></a>
					<a href="https://www.instagram.com/darknagan" target="_blank"><img id="logoSocial" src="./images/social/instagram.png" alt="instagram"/></a>
					<a href="https://twitter.com/DARKNAGAN" target="_blank"><img id="logoSocial" src="./images/social/twitter.png" alt="twitter"/></a>
					<a href="https://www.strava.com/athletes/27095160" target="_blank"><img id="logoSocial" src="./images/social/strava.png" alt="strava"/></a>
					<h2>Social</h2>
				</div>
				<div class="col">
					<a href="https://www.youtube.com/user/TheDarks91" target="_blank"><img id="logoSocial" src="./images/social/youtube.png" alt="youtube"/></a>
					<a href="https://myanimelist.net/profile/DARKNAGAN" target="_blank"><img id="logoSocial" src="./images/social/mal.png" alt="mal"/></a>
					<a href="https://www.themoviedb.org/u/DARKNAGAN" target="_blank"><img id="logoSocial" src="./images/social/tmdb.png" alt="tmdb"/></a>
					<a href="https://steamcommunity.com/id/darknagan" target="_blank"><img id="logoSocial" src="./images/social/steam.png" alt="steam"/></a>
					<h2>Divertissement</h2>
				</div>
			</div>
		</div>