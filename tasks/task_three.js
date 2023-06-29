const declanRice = {
  name: 'Declan Rice',
  age: 24,
  city: 'England',
  club: 'Arsenal FC',
  skills: ['Football', 'Singing', 'Rejecting small clubs like Chelsea']
}

for (const key in declanRice) {
  console.log(`${key}:${declanRice[key]}`) // @logs  'name:Declan Rice age:24 city:England club:Arsenal FC skills:Football,Singing,Rejecting small clubs like Chelsea '
}
