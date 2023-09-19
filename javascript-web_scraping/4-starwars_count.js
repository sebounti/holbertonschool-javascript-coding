#!/usr/local/opt/node@18/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18'; // Wedge Antilles character ID

// Send a GET request to the Star Wars API films endpoint
request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  // Parse the JSON response
  const filmsData = JSON.parse(body);

  // Filter the films where Wedge Antilles appears
  const filmsWithWedgeAntilles = filmsData.results.filter((film) => {
    return film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`);
  });

  // Print the count of films with Wedge Antilles
  console.log(filmsWithWedgeAntilles.length);
});
