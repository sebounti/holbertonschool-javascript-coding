#!/usr//bin/node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the specified URL
request(url, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  // Check if the request was  successful (status code 200)
  if (response.statusCode === 200) {
    // Write the response body to the specified file
    fs.writeFile(filePath, body, 'utf-8', function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log(`Content saved to ${filePath}`);
      }
    });
  } else {
    console.error(`Request failed with status code: ${response.statusCode}`);
  }
});
