const request = require('request');


const fetchBreedDescription = ((breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    const data = JSON.parse(body);
    if (data[0] === undefined) callback('Breed is not found');
    if (data[0]) callback(null, data[0].description);
  });
});


module.exports = { fetchBreedDescription };