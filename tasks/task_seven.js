for (let count = 1; count <= 10; count++) {
  if (count % 2 == 0) {
    continue
  }
  console.log(count) // @logs 1 3 5 7 9
};
