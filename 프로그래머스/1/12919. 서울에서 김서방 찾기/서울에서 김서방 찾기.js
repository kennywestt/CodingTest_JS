function solution(seoul) {
    let answer = '';
    let kimIndex = 0;
    
    answer = seoul.find((value, index) =>{
        if(value == 'Kim'){
         kimIndex = index;   
        }
    })
    
    answer = "김서방은 " + kimIndex + '에 있다'
    return answer;
}