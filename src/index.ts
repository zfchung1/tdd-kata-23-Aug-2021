export function add(input: string): number {
  if (input) {
    if (input.substring(0, 2) === "//") {
      return customDelimiter(input);
    } else {
      return standardDelimiter(input);
    }
  } else return 0;
}
function standardDelimiter(input: string) {
  const delimiter = /\n|,/;
  return stringCalculator(input, delimiter);
}

function stringCalculator(input: string, delimiter: RegExp | string) {
  return input
    .split(delimiter)
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
}

function customDelimiter(input: string) {
  const delimiter = input.charAt(2);
  const numberedInput = input.split("\n")[1];
  return stringCalculator(numberedInput, delimiter);
}
