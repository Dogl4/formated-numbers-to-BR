const { LIST_VALUES } = require('./list-number')

function reverseString(str) {
  let splitString = str.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

function formatedNumberToBR(str) {
  let [moreNumber, lessNumbers] = str.split(',');
  let tempStr = reverseString(moreNumber);
  const LENGHT_CUT = tempStr.length === 4 ? -1 : -2;
  let first = tempStr.slice(0, LENGHT_CUT);
  let second = tempStr.slice(3);
  const result = reverseString(`${first}.${second}`)
  return `R$ ${result},${lessNumbers}`;
}

function calculater(listNumbers) {
  const listFormat = listNumbers.reduce((acc, number) => {
    const tempValue = parseFloat(acc) + (parseFloat(number));
    return (tempValue).toFixed(2);
  },0).replace('.', ',');
  return formatedNumberToBR(listFormat);
}

console.log(calculater(LIST_VALUES));
