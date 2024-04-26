function getAllFractions(number) {
  const fractions = []
  for (let i = 1; i < number; i++) {
    fractions.push(`${i}/${number}`)
  }
  return fractions
}

function generatePercent() {
  const percent = [2, 3, 4, 5, 6, 12]
  return ['width', 'height', 'size'].reduce((obj, item) => {
    let classesList = {}
    for (const val of percent) {
      const classes = getAllFractions(val).reduce((map, val) => {
        const [a, b] = val.split('/')
        map[val.replace('/', '-dv-')] = `${((+a / +b) * 100).toFixed(Number.isInteger((+a / +b) * 100) ? 0 : 6)}%`
        return map
      }, {})
      classesList = { ...classesList, ...classes }
      obj[item] = classesList
    }
    return obj
  }, {})
}

const extend = generatePercent()

module.exports = extend
