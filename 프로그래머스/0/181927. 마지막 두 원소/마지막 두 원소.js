function solution(num_list) {
    let answer = num_list;
    let pp = num_list.reverse().slice(0,2);
    let kk = 0
    num_list[0] > num_list[1] ? kk = num_list[0]-num_list[1] : kk = num_list[0]*2
    answer.reverse().push(kk);
    return answer;
}