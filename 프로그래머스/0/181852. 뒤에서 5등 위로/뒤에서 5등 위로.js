function solution(num_list) {
    let answer = [];
    num_list.sort((a,b)=>a-b);
    answer = num_list.slice(5,num_list.length)
    return answer;
}