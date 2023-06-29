const foods = ['Rice', 'Beans', 'Yam', 'Agbado', 'Indomie', 'Cassava', 'Egusi']

for (const food of foods) {
  if (food === 'Rice') {
    console.log(`I love ${food}`) // @logs I love Rice
  } else if (food === 'Beans') {
    console.log(`${food} is very proteinous`) // @logs  Beans is very proteinous
  } else if (food === 'Yam') {
    console.log(`I love ${food} and oil `) // @logs  I love Yam and oil
  } else if (food === 'Agbado') {
    console.log(`${food} is for Agbadorians and BATmen`) // @logs Agbado is for Agbadorians and BATmen
  } else if (food === 'Indomie') {
    console.log(`${food} is for kids`) // @logs Indomie is for kids
  } else if (food === 'Cassava') {
    console.log(`${food} is also for Agbadorians`) // @logs Cassava is also for Agbadorians
  } else {
    console.log(`${food} is for big men`)// @logs Egusi is for big men
  }
}
