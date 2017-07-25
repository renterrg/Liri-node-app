// var keys = require('./keys');

// var Twitter = require('twitter');
// var client = new Twitter (keys.twitterKeys);
// var params = {screen_name:'renzo_bootcamp'};

// var Spotify = require('node-spotify-api');
// var spotify = new Spotify(keys.spotifyKeys);

// var request = require('request');

var fs = require('fs');

// var user_request = process.argv[2];
// var input = process.argv[3];

// function makeRequest() {
// 	if (user_request === 'my-tweets') {
// 		getTwitter();
// 	} else if ( user_request === 'spotify-this-song') {
// 		getSpotify();
// 	} else if ( user_request === 'movie-this') {
// 		getMovie();
// 	} else {
// 		console.log('Liri does not know that.')
// 	}
// }

// makeRequest();

// function getTwitter() {
// 	client.get('statuses/user_timeline', params, function(error, tweets, response) {
// 	  if (!error) {
// 	  	for (var i = 0; i < tweets.length; i++) {
// 	  		console.log(tweets[i].created_at);
// 	  		console.log(' ');
// 	  		console.log(tweets[i].text);
// 	  		console.log('------------');
// 	  	}
// 	  }
// 	});
// }

// function getSpotify() { 
// 	spotify.search({type: 'track', query:input}, function(err, data) {
// 	  if (err) {
// 	  		console.log(err);
// 	  		return;
// 	    }

// 	    console.log("Song: " + data.tracks.items[0].name);
// 	    console.log("Album: " + data.tracks.items[0].album.name);
// 	    console.log("Artist: " + data.tracks.items[0].artists[0].name);
// 	    console.log("Preview URL: " + data.tracks.items[0].preview_url);	  
// 	});
// }

// function getMovie() {
// 	request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

// 	  if (!error && response.statusCode === 200) {

// 	    console.log("Title: " + JSON.parse(body).Title);
// 	    console.log("Released: " + JSON.parse(body).Released);
// 	    console.log("Imdb Rating: " + JSON.parse(body).imdbRating);
// 	    console.log(JSON.parse(body).Ratings[1].Source + ": " + JSON.parse(body).Ratings[1].Value);
// 	    console.log("Language: " + JSON.parse(body).Language);
// 	    console.log("Plot: " + JSON.parse(body).Plot);
// 	    console.log("Actors: " + JSON.parse(body).Actors);

// 		}
// 	});
// }

function doWhatItSays() {
	fs.readFile('random.txt', 'utf8', function (error, data){
		if (error) {
			return console.log(error);
		}
		console.log(data);
	});
}

doWhatItSays();



