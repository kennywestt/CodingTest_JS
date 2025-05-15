function solution(arr) {
    var average = 0;
    var total = 0;
    
    for(var i=0; i<arr.length; i++){
        total += arr[i]
    }
    
    average = total / arr.length;
    return average;
}