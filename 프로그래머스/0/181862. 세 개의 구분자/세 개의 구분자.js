function solution(myStr) {
    const pp  = /[^abc]+/g
    let result = myStr.match(pp)
    if(result === null){
        result = ["EMPTY"]
    }
    return result;
}