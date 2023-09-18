#!/usr/local/opt/node@18/bin/node

const axios = require('axios');

const url = process.argv[2];

axios.get(url)
  .then((response) => {
    console.log(`code: ${response.status}`);
  })
  .catch((error) => {
    console.error(error);
  });
