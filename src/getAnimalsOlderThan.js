const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .find((especies) => especies.name === animal)
    .residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
