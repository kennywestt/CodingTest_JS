function solution(my_string, num1, num2) {
    let answer = '';
    let pp = [...my_string]
    let kk = [];
    pp.filter((element, index) =>{
        if(num1 == index) {
            element = my_string[num2]
            kk.push(element)
        }
        else if(num2 == index) {
            element = my_string[num1]
            kk.push(element);
        } else {
            kk.push(element);
        }
    })
    answer = kk.join('');
    return answer;
}