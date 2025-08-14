function solution(my_string) {
    let answer = '';
    let lstring = my_string.toLowerCase();
    let array = [];
    
    array = lstring.split('');
    answer = array.sort().join('');
    
    return answer;
}