function addBorder(picture:string[]) :any {

    console.log(picture)
    let lengthOfWall = picture[0].length + 2 
    let wall = ""
   for (let i = 0 ;i< lengthOfWall;i++){

   wall = wall.concat("*")

   }

   console.log(wall)


   picture.unshift(wall)
   picture.push(wall)

   for (let i=1 ; i < picture.length -1 ; i++){

    picture[i] = "*".concat(picture[i],"*");
    console.log(picture[i])

   }
   
   return picture
}


console.log(addBorder(['abc','def']))