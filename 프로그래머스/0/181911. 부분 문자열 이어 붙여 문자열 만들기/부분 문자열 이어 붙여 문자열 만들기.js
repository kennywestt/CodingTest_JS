function solution(my_strings, parts) {
    let answer = '';
    my_strings.forEach((element, index) => {
        let [s, e] = parts[index];
        answer += element.substr(s, e-s+1);
    })
    return answer;
}