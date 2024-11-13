export function sum(a, b) {
  return a + b;
}

export function capitalize(string) {
  let firstLetter = string.charAt(0);
  let firstLetterCap = firstLetter.toUpperCase();
  let remaining = string.slice(1);
  let capitalizeWord = firstLetterCap + remaining;
  return capitalizeWord;
}

export function reverseString(string) {
  const array = string.split("");
  const newArray = [];
  array.map((item) => {
    newArray.splice(0, 0, item);
  });
  let reverseWord = newArray.join("");
  return reverseWord;
}

export const calculator = {
  add(a, b) {
    return a + b;
  },
  substract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export function caesar(string, key) {
  const arrayABC = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const wordArray = string.split("");

  const newArray = [];

  wordArray.map((item) => {
    let itemIndex = arrayABC.indexOf(item);

    let newIndex = 0;
    if (itemIndex + key > arrayABC.length) {
      newIndex = (itemIndex + key) % arrayABC.length;
    } else {
      newIndex = itemIndex + key;
    }
    newArray.push(arrayABC[newIndex]);
  });
  let word = newArray.join("");
  return word;
}

export function analyzeArray(array) {
  let average;
  let min;
  let max;
  let length;

  let sum = 0;

  array.map((item) => {
    sum = sum + item;
  });

  average = sum / array.length;
  min = Math.min(...array);
  max = Math.max(...array);
  length = array.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length,
  };
}
