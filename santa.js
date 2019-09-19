function deliverPresents(houses) {
  if (houses.length === 1) {
    console.log('Delivering presents to ' + houses[0])
  } else {
    var first = houses.slice(0, parseInt((houses.length / 2)))
    var second = houses.slice(parseInt(houses.length / 2), houses.length)

    deliverPresents(first)
    deliverPresents(second)
  }
}

module.exports = deliverPresents
