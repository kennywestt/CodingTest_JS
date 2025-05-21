function solution(numbers) {
    var sum = 0;
    var average = 0;
    
    for(var i = 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    
    average = sum / numbers.length;
    
    return average;
}