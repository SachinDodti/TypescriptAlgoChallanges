function candies(n: number, m: number) : number {

    const candy = Math.floor( m / n );

    const totalCandies = candy * n;

    return totalCandies
}


console.log(candies(3,17))