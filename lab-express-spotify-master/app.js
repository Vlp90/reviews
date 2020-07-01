require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Retrieve an access token
  spotifyApi
    .clientCredentialsGrant()
    .then(data => spotifyApi.setAccessToken(data.body['access_token']))
    .catch(error => console.log('Something went wrong when retrieving an access token', error));

const app = express();

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

// setting the spotify-api goes here:

// Our routes go here:

// app.get("/", (req, res) => {
//     spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
//         function(data) {
//           console.log('Artist albums', data.body);
//           res.render("index.hbs");
//         },
//         function(err) {
//           console.error(err);
//         }
//       );
  
   
// });

app.get('/', (req, res, next) => {
    spotifyApi
      .getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
      .then((data) => {
        //   console.log(data)
        res.render('index', { data });
      })
      .catch(next);
  });

app.listen(5000, () =>
  console.log("My Spotify project running on port 5000 🎧 🥁 🎸 🔊")
);
