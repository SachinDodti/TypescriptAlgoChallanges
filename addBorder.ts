function addBorder(picture: string[]): any {
  console.log(picture);
  let lengthOfWall = picture[0].length + 2;
  //let lengthOfWall = '*'.repeat()
  let wall = "";
  for (let i = 0; i < lengthOfWall; i++) {
    wall = wall.concat("*");
  }

  console.log(wall);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
    console.log(picture[i]);
  }

  return picture;
}

function addBorder2(picture: string[]): any {
  let lengthOfWall = "*".repeat(picture[0].length + 2);

  picture.unshift(lengthOfWall);
  picture.push(lengthOfWall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}
//console.log(addBorder(["abc", "def"]));
console.log(addBorder2(["abc", "def"]));
