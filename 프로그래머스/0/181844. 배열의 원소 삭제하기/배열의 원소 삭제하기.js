function solution(arr, delete_list) {
    let answer = arr.filter(item => !delete_list.includes(item));

    return answer;
}
