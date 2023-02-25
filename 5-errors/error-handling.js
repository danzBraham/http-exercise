function printCharacterStats(level) {
  if (isNaN(level) || typeof level !== "number") {
    throw "Parameter is not a number!";
  } else {
    console.log(`Your character is level ${level}!`);
  }
}

try {
  printCharacterStats(5);
  printCharacterStats("7");
  printCharacterStats(8);
} catch (err) {
  console.log(err);
}
