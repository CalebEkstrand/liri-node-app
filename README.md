# liri-node-app
Give start-to-finish instructions on how to run the app
Contain a link to a deployed version of the app
Clearly list the technologies used in the app

This app is used for Searching songs, searching movies, and for finding concert dates and times,
I organized it with 4 functions, one for each action. my key for spotify is stored securly in .env and I finish the do what it says with an if else statement to read what type of function is being produced.
You run the app by changing directory into it and running one of the following codes,
node liri.js concert-this <artist/band name here>
node liri.js spotify-this-song '<song name here>'
node liri.js movie-this '<movie name here>'
and node liri.js do-what-it-says to run whatever command is inside the random.txt file.
This app utilizes the Spotify API, The concert this API, and the OMDB API.
The do what it says is capable of using all 3.
I had a lot of fun making this app, It was challenging but APIs are amazing.




Video of the app in action:
https://drive.google.com/file/d/1Nw8g6GNoPpwR1zgtOXLjalxI0TJxAZ8v/view

Link to deployed:
https://calebekstrand.github.io/liri-node-app/