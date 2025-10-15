function solution(num_list) {
    let odd = 0;
    let even = 0;
    for(let i in num_list){
        i % 2== 0 ? odd += num_list[i] : even += num_list[i];
    }
    if(odd >= even){
        return odd
    }
    else if(odd < even){
        return even
    }
}