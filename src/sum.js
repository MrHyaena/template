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
