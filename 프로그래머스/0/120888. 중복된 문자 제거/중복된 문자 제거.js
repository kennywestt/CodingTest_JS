function solution(my_string) {
    let arr = [];
    my_string.split('')
    .filter(v=> {
        if(!arr.includes(v)){
            arr.push(v)
        }
    });
    return arr.join('');
}