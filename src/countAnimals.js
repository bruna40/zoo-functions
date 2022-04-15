const data = require('../data/zoo_data');

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
    const especie = data.species.find((especies) => especies.name === animal.data.especies);
    return especie.residents.length;
  }
  if (Object.keys(animal).length === 2) {
    const sex = data.species.find((especie) => especie.name === animal.data.species);
    return sex.residents.filter((genre) => genre.sex === animal.sex).length;
  }
}

module.exports = countAnimals;
