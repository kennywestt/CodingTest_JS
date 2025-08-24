function solution(my_string) {
    let answer = 0;
    let kk = [];
    let pp =my_string.split('')
    
    pp.filter(element => {
        const parsedNumber = parseInt(element)
        if(Number.isInteger(parsedNumber)){
            kk.push(parsedNumber);
        }
    })
    answer = kk.reduce((sum, current) => sum + current)
    return answer;
}