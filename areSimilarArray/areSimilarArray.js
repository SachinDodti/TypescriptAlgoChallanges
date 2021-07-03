//[1,3,2,1], [1,2,3,3]
function checkUniqueitems(arrayOne, arrayTwo) {
  const dataObject = {
    one: {},
    two: {},
  };

  for (let i = 0; i < arrayOne.length; i++) {
    let itemOne = arrayOne[i];
    let itemTwo = arrayTwo[i];

    dataObject["one"][itemOne] = dataObject["one"][itemOne]
      ? dataObject["one"][itemOne] + 1
      : 1;
    dataObject["two"][itemTwo] = dataObject["two"][itemTwo]
      ? dataObject["two"][itemTwo] + 1
      : 1;

    console.log(dataObject);
    // one:{'1':2, '2':1, '3':1 }
    // two:{'1':1, '2':1, '3':2}
  }

  // one:{'1':2,'2':1,'3':1}
  // two:{'1':1,'2':1,'3':2}

  //check same repeat by keys
  for (key of Object.keys(dataObject.one)) {
    if (dataObject.one[key] !== dataObject.two[key]) {
      return false;
    }
  }

  return true;
}

function checkArraysByRepeateditems(arrayOne, arrayTwo) {
  //simple length check
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  // check if contain all items
  if (
    arrayOne.every((val) => {
      return arrayTwo.includes(val);
    }) &&
    checkUniqueitems(arrayOne, arrayTwo)
  ) {
    return true;
  }
  return false;
}

console.log(checkArraysByRepeateditems([1, 3, 2, 1], [1, 2, 3, 3]));
console.log(checkArraysByRepeateditems([1, 3, 2, 3], [1, 2, 3, 3]));
