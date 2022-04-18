const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const result = data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
    return result;
  }
  if (Object.keys(animal).length === 1) {
    const result = species.find((specie) => specie.name === animal.specie);
    return result.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const sex = species.find((specie) => specie.name === animal.specie);
    return sex.residents.filter((genre) => genre.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
