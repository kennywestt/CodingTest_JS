function solution(my_string, index_list) {
    let answer = '';
    let pp = my_string.split('');
    let kk =[];
    for(let i = 0; i<index_list.length; i++){
        kk.push(my_string[index_list[i]])
    }
    answer = kk.join('');
    return answer;
}