#!/usr/bin/node

const request = require('request');

const movie = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movie}`;

request(url, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const filmTItle = JSON.parse(body).title;
    console.log(filmTItle);
  }
});
