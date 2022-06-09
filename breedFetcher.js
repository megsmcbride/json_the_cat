const request = require('request');
let input = process.argv.slice(2);
console.log(input[0]);
request(`https://api.thecatapi.com/v1/breeds/search/?q=${input[0]}`, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  const data = JSON.parse(body);
  console.log(data[0]);
  console.log(typeof body);
});