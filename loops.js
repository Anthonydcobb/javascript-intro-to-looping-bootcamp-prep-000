var forLoop = (array) => {
  for (let i = 0; i <= 24; i++) {
    i === 1 ? array.push(`I am ${i} strange loop.`) : array.push(`I am ${i} strange loops.`)
  }
  return array;
}

var whileLoop = (n) => {
  while (n >= 0) {
    console.log(--n);

    }
    console.log("done")
  }

  var incrementVariable = () => {
    i = i + 1;
    return i;
  }

  var i = 0;

var doWhileLoop = (num) => {
  do {
    console.log("I run once regardless")
  } while (incrementVariable() <= num)
}
