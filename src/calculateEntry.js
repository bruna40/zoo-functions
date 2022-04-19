const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter(
    (entrant) => entrant.age >= 18 && entrant.age < 50,
  ).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  // seu código aqui
  const age = countEntrants(entrants);
  if (age !== 0) {
    const priceChild = age.child * data.prices.child;
    const priceAdult = age.adult * data.prices.adult;
    const priceSenior = age.senior * data.prices.senior;
    return priceChild + priceAdult + priceSenior;
  }
  return 0;
}

module.exports = { calculateEntry, countEntrants };
