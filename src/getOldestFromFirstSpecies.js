const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const retornaAnimal = employees
    .find((empregado) => empregado.id === id)
    .responsibleFor.find((especie) => especie);

  const descobre = data.species
    .find((especies) => especies.id === retornaAnimal)
    .residents.sort((x, y) => y.age - x.age)[0];

  return Object.values(descobre);
}

module.exports = getOldestFromFirstSpecies;
