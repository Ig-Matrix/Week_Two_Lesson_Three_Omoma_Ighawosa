for (let num1 = 1; num1 <= 10; num1++) {
  for (let num2 = 1; num2 <= 10; num2++) {
    let result = num1 * num2
    if (num2 == 10) {
      result = result + '\n' // @adds line break
    }
    console.log(`${num1} x ${num2} = ${result}`)
  }
}
