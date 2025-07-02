function solution(num_list) {
    
    let result = 0;
    
    if(num_list.length > 10){
        let sum = 0;
        for(let i = 0; i<num_list.length; i++){
            sum += num_list[i];   
        }
        result = sum;
    }
    else {
        let sum = 1;
        for(let i = 0; i<num_list.length; i++){
            sum *= num_list[i];   
        }
        result = sum;
    }
    return result;
}