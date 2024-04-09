function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIndex = Math.floor(array.length / 2);
  let firstHalf = array.slice(0, midIndex);
  let secondHalf = array.slice(midIndex);

  firstHalf = mergeSort(firstHalf);
  secondHalf = mergeSort(secondHalf);

  return merge(firstHalf, secondHalf);
}

function merge(firstHalf, secondHalf) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      mergedArray.push(firstHalf[i]);
      i++;
    } else {
      mergedArray.push(secondHalf[j]);
      j++;
    }
  }

  while (i < firstHalf.length) {
    mergedArray.push(firstHalf[i]);
    i++;
  }

  while (j < secondHalf.length) {
    mergedArray.push(secondHalf[j]);
    j++;
  }

  return mergedArray;
}

let ar1 = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(ar1));
