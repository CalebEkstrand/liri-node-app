require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios")
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var moment = require('moment')
var fs = require("fs")
var command = process.argv[2]
var searchTerm = process.argv.slice(3).join(" ")

// concert-this
// spotify-this-song
// movie-this
// do-what-it-says
function concertThis(searchTerm) {
    //console.log("concert this: " + searchTerm)
    var url = "https://rest.bandsintown.com/artists/" + searchTerm + "/events?app_id=codingbootcamp"
    axios.get(url)
    .then(function (response) {
        console.log(response.data[0].venue.name)
        console.log(response.data[0].venue.city)
        console.log(moment(response.data[0].datetime).format("MM/DD/YYYY"))
    });
}
function spotifyThisSong(searchTerm) {
    //console.log("spotify this song: " + searchTerm)
    spotify.search({ type: 'track', query: searchTerm }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(data.tracks.items[0].album.artists[0].name);
      console.log(data.tracks.items[0].name);
      console.log(data.tracks.items[0].album.name);
      console.log(data.tracks.items[0].external_urls.spotify)
      });
}
function movieThis(searchTerm) {
    // console.log("movie this: " + searchTerm)
    var url = "http://www.omdbapi.com/?t="+searchTerm+"&y=&plot=short&apikey=trilogy"

    axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.imdbRating);
    console.log(response.data.Ratings[1].Value);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
function doWhatItSays() {
    fs.readFile("random.txt","utf8",function(err,data){
        var ran = data.split(",")
        chooseCommand(ran[0],ran[1])
    })
    //console.log("do what it says")
}
function chooseCommand(command, searchTerm) {


if (command === "concert-this") {
    concertThis(searchTerm)
} else if (command === "spotify-this-song") {
    spotifyThisSong(searchTerm)
} else if (command === "movie-this") {
    movieThis(searchTerm)
} else if (command === "do-what-it-says") {
    doWhatItSays(searchTerm)
}else{
    console.log("Invalid command")
}}
chooseCommand(command, searchTerm)