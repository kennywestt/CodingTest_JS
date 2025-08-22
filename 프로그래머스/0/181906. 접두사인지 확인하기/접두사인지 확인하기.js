function solution(my_string, is_prefix) {
    let answer = [];
    let result = 0;
    
    for(let i =0; i<my_string.length; i++){
        answer += my_string[i]
        if(answer == is_prefix){
            console.log('answer == prefixArr : ',answer);
            result = 1;
            break;
        } else {
            console.log('else answer : ',answer)
            result = 0;
        }
    }
    return result;
}