function fibs(n) {
  let array = [];
  let k = 0;
  let j = 1;
  if (n == 0) {
    return array;
  } else if (n == 1) {
    return array.push(k);
  } else {
    array.push(k);
    array.push(j);
    for (let i = 2; i < n; i++) {
      let temp = k + j;
      array.push(temp);
      k = j;
      j = temp;
    }
    return array;
  }
}

function fibsRec(n) {
  if (n == 0) {
    return [];
  }
  if (n == 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }

  const fibArray = fibsRec(n - 1);
  fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  return fibArray;
}

console.log(fibsRec(8));

console.log(fibs(8));
