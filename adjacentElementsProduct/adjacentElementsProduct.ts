function adjacentElementProduct(inputArray: number[]):number{

    let largestProduct = inputArray[0] * inputArray[1];

    for (let i = 1; i< inputArray.length -1 ; i++){

        let product  = inputArray[i] * inputArray[i+1];

        console.log(product)

        largestProduct  = largestProduct > product ? largestProduct: product

    }

    return largestProduct

}


console.log(adjacentElementProduct([5,6,2,75,7,3]))