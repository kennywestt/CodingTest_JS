function solution(num_list, n) {
    let answer = [];
    let kk = []
    let pp = [];
    answer = num_list.filter((element,index) =>{
        if(index < n){
            kk.push(element.toString());
        } else {
            pp.push(element.toString());
        }
    })
    pp.push(...kk)
    answer = pp.map(item => parseInt(item, 10));
    return answer;
}