#!/usr/local/opt/node@18/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`code: ${response.statusCode}`);
  }
});
