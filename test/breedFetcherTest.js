const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('#fetchBreedDescription', () => {
  it('returns a string description for a valid breed via callback', (done) => {
    fetchBreedDescription('Siberian', (err, description) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(expectedDesc, description.trim());
      done();
    });
  });
  it('returns Breed is not found when no cat breed is inputed', (done) => {
    fetchBreedDescription('potato', (err, description) => {
      assert.equal(err, 'Breed is not found');
      const expectedDesc = undefined;
      assert.equal(expectedDesc, description);
      done();
    });
  });
});