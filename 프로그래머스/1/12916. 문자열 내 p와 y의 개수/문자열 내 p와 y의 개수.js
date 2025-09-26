function solution(s){
    let lowerStr = s.toLowerCase();
    let p = 0;
    let y = 0;
    for (let tt of lowerStr){
        if(tt == 'p'){
            p++;
        } else if(tt == 'y'){
            y++;
        }
    }
    return p === y ? true : false;
}