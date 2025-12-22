function solution(arr, flag) {
    let X = [];
    for(let i =0; i<arr.length; i++){
        if(flag[i]==true){
            for(let j =1; j<= arr[i]*2; j++){
             X.push(arr[i]) 
            }
        } else if(flag[i]==false){
            for(let j =1; j<=arr[i]; j++)
            X.pop();
        }
    }
    return X;
}