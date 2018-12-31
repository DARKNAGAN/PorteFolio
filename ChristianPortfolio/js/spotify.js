        var stateKey = 'spotify_auth_state';

        /**
         * Obtains parameters from the hash of the URL
         * @return Object
         */
        function getHashParams() {
          var hashParams = {};
          var e, r = /([^&;=]+)=?([^&;]*)/g,
              q = window.location.hash.substring(1);
          while ( e = r.exec(q)) {
             hashParams[e[1]] = decodeURIComponent(e[2]);
          }
          return hashParams;
        }

        /**
         * Generates a random string containing numbers and letters
         * @param  {number} length The length of the string
         * @return {string} The generated string
         */
        function generateRandomString(length) {
          var text = '';
          var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

          for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }
          return text;
        };

        var userProfileSource = document.getElementById('musiquesElt').innerHTML,
            userProfileTemplate = Handlebars.compile(userProfileSource),
            userProfilePlaceholder = document.getElementById('musiquelist');

        var params = getHashParams();
        var access_token = params.access_token,
            state = params.state,
            storedState = localStorage.getItem(stateKey);
        if (access_token && (state == null || state !== storedState)) {
		  alert('Problème pour vous authentifier');
		  document.location.href="http://ccunatbrule.free.fr/ChristianPortfolio/vue/musique.php"; 
        } else {
          localStorage.removeItem(stateKey);
          if (access_token) {
            $.ajax({
                url: 'https://api.spotify.com/v1/me/following?type=artist',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  userProfilePlaceholder.innerHTML = userProfileTemplate(response);

                  $('#login').hide();
                  $('#loggedin').show();

                }
            });
          } else {
              $('#login').show();
              $('#loggedin').hide();
          }

		//Bouton Event
          document.getElementById('login-button').addEventListener('click', function() {

            var client_id = '4983732e765641c781c8dcfc136d0109'; // Your client id
            var redirect_uri = 'http://ccunatbrule.free.fr/ChristianPortfolio/vue/musique.php'; // Your redirect uri
            var state = generateRandomString(16);
            localStorage.setItem(stateKey, state);
            var scope = 'user-follow-read';
            var url = 'https://accounts.spotify.com/authorize';
            url += '?response_type=token';
            url += '&client_id=' + encodeURIComponent(client_id);
            url += '&scope=' + encodeURIComponent(scope);
            url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
            url += '&state=' + encodeURIComponent(state);

            window.location = url;
          }, false);
        }
