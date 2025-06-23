function solution(num) {
    let result = 0;
    
    for(let i = 0; i<=500; i++){
        if(i == 500){
            console.log('i =',i);
            return -1;
            break;
        }
         else if(num % 2 === 0) {
            num = num / 2;
            console.log('i =',i);
            console.log('num =',num);
        } else if(num % 2 !== 0 && num !== 1){
            num = num * 3 + 1;
            console.log('i =',i);
            console.log('num =',num);
        } else if(num === 1){
            console.log('i =',i);
            result = i;
            break;
        }
    }
    return result;
}
