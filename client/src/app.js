// Reverse each word in a sentence,
let reversal = (word) => {
  return word.split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
};
//console.log(reversal('tobi'));

function maxCharacter(str) {
  const sortedStr = str.split('').sort();
  const maxChar = {
    char: '',
    count: 0
  };
  const currentChar = {
    char: '',
    count: 0
  };
  sortedStr.forEach(char => {
    if (currentChar.char === char) {
      currentChar.count++;
    } else {
      if (maxChar.count < currentChar.count) {
        maxChar.char = currentChar.char;
        maxChar.count = currentChar.count;
      }
      currentChar.char = char;
      currentChar.count = 0;
    }
  });
  console.log(maxChar.char);
}
//maxCharacter('qwertyuiopa');

let max_str = (string) => {
  let maxChar = 0;
  let currentChar = {};
  let myChar = '';

  myString = string.split(' ').join('').split('');
  myString.forEach((char) => {
    if (currentChar[char]) {
      currentChar[char]++;
      console.log(currentChar[char]);
      //  (currentChar[char] > maxChar) ? myChar = char: maxChar = 0, myChar = char;
    } else {
      currentChar[char] = 1;
    }
  });
  //  console.log(`'${myChar}' found ${currentChar[myChar]} times`);
};
//max_str('1111112233456');

let maxString = string => {
  let myChar = {};
  let tracker = 0;
  let getChar = '';
  string.split('').forEach(elem => {
    let y = (!myChar[elem]) ? myChar[elem] = 1 : myChar[elem] += 1;
    let x = (myChar[elem] > tracker) ? (getChar = elem, tracker = myChar[elem]) : false;
  });
  console.log(`'${getChar}' found ${tracker} times`);
};
//maxString('11148');

let my_sort = numbers => {
  let even = [];
  let odd = [];
  numbers.forEach(number =>
    (number % 2 === 0) ? even.push(number) : odd.push(number)
  );
  console.log(odd.concat(even));
};

//my_sort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

let array_diff = (array1, array2) =>
  array1.filter(x =>
    !array2.includes(x)).concat(array2.filter(x =>
    !array1.includes(x)));

let array1 = [1, 2, 6, 3, 4, 5, 6, 7, 8, 9, 10];
let array2 = [1, 2, 6, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//console.log(array_diff(array1, array2));
