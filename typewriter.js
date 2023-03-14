const sentence = "hello there from lighthouse labs";
  function printDelay(sentence) {
let i = 0;
let delay = 50
  const printChar = () => {
    if (i < sentence.length) {
      process.stdout.write(sentence[i]);
      i++;
      setTimeout(printChar, delay);
    } else {console.log()}
  }
  printChar();
}
printDelay("hello there from lighthouse labs")

   

