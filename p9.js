function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

let numbers = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers); 