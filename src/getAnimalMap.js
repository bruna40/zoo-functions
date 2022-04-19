const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function completa(opt, obj) {
  const nome = species.reduce((acc, curr) => {
    const residente = opt.sex
      ? curr.residents.filter((res) => res.sex === opt.sex)
      : curr.residents;
    const names = residente.map((res) => res.name);
    acc[curr.location].push({ [curr.name]: opt.sorted ? names.sort() : names });
    return acc;
  }, obj);
  return nome;
}

function getAnimalMap(options) {
  // seu código aqui
  const obj = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || Object.values(options)[0] === 'female') {
    return data.species.reduce((acc, specie) => {
      acc[specie.location] = [...acc[specie.location], specie.name];
      return acc;
    }, obj);
  }
  if (options.includeNames) {
    return completa(options, obj);
  }
}

module.exports = getAnimalMap;
