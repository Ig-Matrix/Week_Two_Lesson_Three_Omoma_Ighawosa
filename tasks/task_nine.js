const bigClubs = ['Arsenal FC', 'Real Madrid', 'Barcelona FC', 'Ajax', 'Juventus FC', 'Bayern Munich']

bigClubs.forEach(function (bigClub) {
  console.log(bigClub)
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const doubledNumbers = numbers.map(function (doubledNumber) {
  const result = doubledNumber * 2
  return result
})

console.log(doubledNumbers)
