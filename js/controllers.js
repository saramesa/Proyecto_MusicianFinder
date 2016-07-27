/*CONTROLLERS*/

app.controller('HomeViewController', ['$scope', function($scope) {
	$scope.name = "Musician Finder"
}]);

/* Controlador para hacer registro, log in y añadir bar/artista */
app.controller("RegisterController", function($scope, $localStorage, $sessionStorage, $location) {

	$scope.save = function() {
		var userName = $("#userName").val();
		var name = $("#Name").val();
		var userEmail = $("#userEmail").val();
		var userPass = $("#userPass").val();
		var userRole = $("#userType").val();
		var userPhoto = $("#userPhoto").val();
		var userAge = $("#userAge").val();

		var user = {};
		user["name"]= name;
		user["username"] = userName;
		user["email"] = userEmail;
		user["password"] = userPass;
		user["role"] = userRole;
		user["photo"] = userPhoto;
		user["age"] = userAge;

		var storedUsers = JSON.parse(window.localStorage.getItem('ngStorage-user')) || {};
		storedUsers[userName] = user;
		$localStorage.user = storedUsers;
		alert("Usuario Registrado. Por favor, haz log in");
	}

	$scope.logIn = function (data){
		var currentUserName = $("#login-userEmail").val();
		var currentUserPassword = $("#login-userPass").val();

		var currentUser = {};
		currentUser["userName"] = currentUserName;
		currentUser["userPassword"] = currentUserPassword;

		var currentStoredUser = JSON.parse(window.localStorage.getItem('ngStorage-user')) || {};

		if(currentStoredUser[currentUserName]) {
			if(currentStoredUser[currentUserName].password == currentUserPassword) {
				currentStoredUser[currentUserName] = currentUser;
				$sessionStorage.currentUser = currentUserName;
				}
			}else {
				alert("El usuario no existe");
			}
		}

		if($sessionStorage.currentUser){
			$scope.user = $sessionStorage.currentUser;
		}else{
			$scope.user = false;
		}
		
		if($scope.user){
			$location.url("/add-new-item")
		}else {
			$location.url("/register")
		}


		$scope.reload = function() {
			location.reload();
		}

		$scope.addNewBar = function() {
			var barName = $("#barName").val();
			var barAddress = $("#barAddress").val();
			var barPhoto = $("#barPhoto").val();
			var barPhone = $("#barPhone").val();
			var barEmail = $("#barEmail").val();

			var bar = {}
			bar["name"]= barName;
			bar["address"] = barAddress;
			bar["photo"] = barPhoto;
			bar["phone"] = barPhone;
			bar["email"] = barEmail;

			var storedBars = JSON.parse(window.localStorage.getItem('ngStorage-bar')) || {};
			storedBars[barName] = bar;
			$localStorage.bar = storedBars;
		}



		$scope.addNewArtist = function() {
			var artistName = $("#artistName").val();
			var artistTypeMusic = $("#artistTypeMusic").val();
			var artistTypeMusician = $("#artistTypeMusician").val();
			var artistPhoto = $("#artistPhoto").val();
			var artistPhone = $("#artistPhone").val();
			var artistEmail = $("#artistEmail").val();
			var artistAge = $("#artistAge").val();

			var artist = {}
			artist["name"]= artistName;
			artist["typemusic"] = artistTypeMusic;
			artist["typeband"] = artistTypeMusician;
			artist["photo"] = artistPhoto;
			artist["phone"] = artistPhone;
			artist["email"] = artistEmail;
			artist["age"] = artistAge;

			var storedArtists = JSON.parse(window.localStorage.getItem('ngStorage-artist')) || {};
			storedArtists[artistName] = artist;
			$localStorage.artist = storedArtists;
		}

});


app.controller('FilterController', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.name = $routeParams.name;
	$scope.artists = JSON.parse(window.localStorage.getItem('ngStorage-artist'));
	$scope.bars = JSON.parse(window.localStorage.getItem('ngStorage-bar'));
}]);



app.controller('ProfileController', ['$scope', '$routeParams', '$localStorage', '$sessionStorage', '$location', function($scope, $routeParams, $localStorage, $sessionStorage, $location) {
	$scope.name = $routeParams.name;
	$scope.currentUser = $sessionStorage.currentUser;
	$scope.user = $localStorage.user[$scope.currentUser];
	
	if($scope.user){
		$location.url("/profile")
	}else {
		$location.url("/add-new-item")
	}

	$scope.logOut = function() {
			sessionStorage.clear();
		}

	$scope.reload = function() {
			location.reload();
		}
	
}]);


app.controller('eachArtistController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.name = $routeParams.name;
	var currentArtist = JSON.parse(window.localStorage.getItem('ngStorage-artist'));
	var currentBar = JSON.parse(window.localStorage.getItem('ngStorage-bar'));
	$scope.artists = currentArtist;
	$scope.bars = currentBar;
}]);