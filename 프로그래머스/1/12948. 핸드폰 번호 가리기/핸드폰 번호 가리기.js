function solution(phone_number) {
    let answer = '';
    let answerArray = [];
    let newArray = [];
    
    for(let i = 0; i<=phone_number.length-1; i++){
        answerArray.push(phone_number[i]);
    }
    
    answerArray.reverse();

    for(let i = 0; i<=answerArray.length-1; i++){
        if(i>=4){
            newArray.push(answerArray[i].replace(/\d+/,'*'));
        } else {
            newArray.push(answerArray[i]);
        }
    }
    console.log('newArray : ',newArray);
    answer = newArray.reverse().join('');
    
    return answer;
}