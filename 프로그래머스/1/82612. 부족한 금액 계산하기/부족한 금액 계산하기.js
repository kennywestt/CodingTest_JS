function solution(price, money, count) {
    let result = 0;
    let sumPrice = 0;
    
    for(let i = 1; i<= count; i++){
        sumPrice += price * i
    }

    console.log(sumPrice);
    
    if(money < sumPrice){
        result = sumPrice - money;
    } else{
        result = 0;
    }
    
    return result;
}