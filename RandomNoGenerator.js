function randomNumberGenerator(start,end){
    let randNum = Math.round(Math.random()*end);
    while(start<=randNum){
        randNum = Math.round(Math.random()*end);
    }
    return randNum;
}
console.log(randomNumberGenerator(20,200));