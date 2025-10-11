function solution(arr1, arr2) {
    let answer = 0;
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let total1 = 0;
    let total2 = 0;
    
    if(arr1Len !== arr2Len){
        arr1Len > arr2Len ? answer = 1 : answer = -1;
    } else {
        for(let tt of arr1){
        total1 += tt
    }
        for(let kk of arr2){
        total2 += kk
    }
        if(total1 ==  total2){
            answer = 0;
        }
        else{
            total1 > total2 ? answer = 1 : answer = -1
        }
    }
    return answer;
}