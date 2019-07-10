// Create a map object
var myMap = L.map("map", {
  center: [40.4637, 3.7492],
  zoom: 3
});

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var places = [{
  location: [40.783000, -73.958959],
  name: "Solomon R. Guggenheim Museum",
  date: "4/11/2019"
},
{
  location: [40.715961, -73.964767],
  name: "DEVOCION COFFEE",
  date: "4/12/2019"
},
{
  location: [40.723332,	-74.001957],
  name: "Gucci Wooster",
  date: "4/19/2019"
},
{
  location: [37.499395,	126.866787],
  name: "Gocheok Sky Dome",
  date: "11/24/2017, 7/13/2018"
},
{
  location: [33.6046,	130.4036],
  name: "Fukuoka Convention Center",
  date: "12/22/2017"
},
{
  location: [35.8951,	139.6307],
  name: "Saitama Super Arena",
  date: "1/27/2018"
},
{
  location: [25.0514,	121.5497],
  name: "Taipei Arena",
  date: "2/10/2018"
},
{
  location: [34.6695,	135.4760],
  name: "Kyocera Dome Osaka",
  date: "2/10/2018"
},
{
  location: [1.300152,	103.874376],
  name: "Singapore Indoor Stadium",
  date: "3/3/2018"
},
{
  location: [13.9129,	100.5478],
  name: "Impact, Muang Thong Thani",
  date: "3/16/2018"
},
{
  location: [14.5321,	120.9838],
  name: "Mall of Asia Arena",
  date: "4/28/2018"
},
{
  location: [22.3213,	113.9433],
  name: "AsiaWorld-Expo",
  date: "6/2/2018"
},
{
  location: [3.0538,	101.6935],
  name: "Axiata Arena",
  date: "6/7/2018"
},
{
  location: [22.1475,	113.5589],
  name: "Cotai Arena",
  date: "8/10/2018"
},
{
  location: [51.4700,	0.4543],
  name: "Heathrow Airport",
  date: "4/30/2019"
},
{
  location: [41.8929,	12.4826],
  name: "Capitoline Museums",
  date: "5/28/2019"
},
{
  location: [33.9416,	-118.4085],
  name: "Los Angeles International Airport",
  date: "1/16/2019"
}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < places.length; i++) {
  var place = places[i];
  L.marker(place.location)
    .bindPopup("<h3>" + place.name + "</h1> <hr> <h3>Date " + place.date + "</h3>")
    .addTo(myMap);
}
