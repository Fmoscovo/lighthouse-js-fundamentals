const judgeVegetable = function (vegetables, metric) {
  const metricArray = vegetables.map((veg, i) => veg[metric]);
  const maxVal = Math.max(...metricArray);
  const candidates = vegetables.filter(veg => veg[metric] === maxVal)
  if (candidates.length == 1) {
    return candidates[0].submitter;
  } else {
    return candidates.map(cand => cand['submitter']);
  }
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 10,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness'


console.log(judgeVegetable(vegetables, metric))