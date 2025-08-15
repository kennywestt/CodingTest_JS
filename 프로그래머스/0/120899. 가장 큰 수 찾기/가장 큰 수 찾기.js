function solution(array) {
    let ArrMax = 0
    let ArrIndex = 0
    
    for(let i = 0; i<array.length; i++){
        if(array[i]>ArrMax){
            ArrMax = array[i];
            ArrIndex = i;
        }
    }
    return [ArrMax, ArrIndex];
}