const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids === undefined) {
    return [];
  }
  return data.species.filter((especie) => ids.includes(especie.id));
}

module.exports = getSpeciesByIds;
