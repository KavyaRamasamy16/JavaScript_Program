function lowest(arr) {
    let i;

    
    let min = arr[0];

    
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min)
            min = arr[i];
    }

    return min;
}


let arr = [20,35,17,60];
console.log("Lowest in given array is " + lowest(arr));