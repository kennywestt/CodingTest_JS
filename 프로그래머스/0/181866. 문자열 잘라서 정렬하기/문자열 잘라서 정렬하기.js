function solution(myString) {
    let kk = myString.split('x');
    let pp =[];
    for (let i of kk){
        if(i){
         pp.push(i)   
        }
    }
    pp.sort((a,b)=> a.localeCompare(b))
    return pp;
}