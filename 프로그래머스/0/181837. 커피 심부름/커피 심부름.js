function solution(order) {
    let answer = 0;
    order.filter(v=> {
        if(v.includes('cafelatte')){
            answer+=5000
        } else {
            answer+=4500
        }
    })
    return answer;
}