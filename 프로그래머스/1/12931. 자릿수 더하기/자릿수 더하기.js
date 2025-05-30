function solution(n)
{
    let answer = 0;
    let nString = n.toString();
    let stringSplit = nString.split('');
    let numArray = stringSplit.map(Number);
    
    for(let i=0; i<numArray.length; i++){
        answer += numArray[i];
    }
    console.log(stringSplit);

    return answer;
}