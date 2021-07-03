function arrayPreviousLess(items: number[]) : number[]{
    const lessThanList : number[] = [];

    for(let i = items.length - 1 ; i >= 0; i-- ){

        for(let j = i; j >=0 ;j--){
            console.log(items[i] );
            console.log(items[j] );
            

            if(items[i] > items[j]){
                console.log(items[j])
                console.log(lessThanList.unshift(items[j]));
                break;            
            } else if (j === 0){
                lessThanList.unshift(-1)
                console.log(lessThanList)
            }
       
        }

    }

    return lessThanList;

}

console.log(arrayPreviousLess([3,5,2,4,5]))

//


function arrayPreviousLess(items){
    const lessThanList = [];

    debugger;
    for(let i = items.length - 1 ; i >= 0; i-- ){

        for(let j = i; j >=0 ;j--){
            console.log(items[i] );
            console.log(items[j] );
            

            if(items[i] > items[j]){
                console.log(items[j])
                console.log(lessThanList.unshift(items[j]));
                break;            
            } else if (j === 0){
                lessThanList.unshift(-1)
                console.log(lessThanList)
            }
       
        }

    }

    return lessThanList;

}

console.log(arrayPreviousLess([3,5,2,4,5]))