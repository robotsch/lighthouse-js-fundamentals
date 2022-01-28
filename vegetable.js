const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function(veg, metric) {
  let windex = 0
  let winner = 0
  for(let i = 0; i < veg.length; i++) {
    if(veg[i][metric] > winner) {
      windex = i
      winner = veg[i][metric]
    }
  }
  return veg[windex].submitter
}

console.log(judgeVegetable(vegetables, metric))
