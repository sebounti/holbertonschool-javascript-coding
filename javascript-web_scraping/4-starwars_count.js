#!/usr/local/opt/node@18/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18'; // ID du personnage Wedge Antilles

// Envoye une requête GET à l'API Star Wars pour obtenir la liste des films
request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

// Analyser la réponse JSON
  const filmsData = JSON.parse(body);

  // Filtrer les films où Wedge Antilles apparaît
    const filmsWithWedgeAntilles = filmsData.results.filter((film) => {
    return film.characters.includes/
    (`https://swapi-api.hbtn.io/api/people/${characterId}/`);
  });

  // print le nombre de films avec Wedge Antilles
    console.log(filmsWithWedgeAntilles.length);
});
