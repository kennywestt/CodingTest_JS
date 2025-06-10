function solution(n) {
    let answer = 0;
    let changeStr = n.toString();
    let array2 = [];
    
    console.log(n);
    console.log(typeof n);
    console.log(typeof changeStr);
    console.log(changeStr.length);
    
    for(let i =0; i<changeStr.length; i++){
        array2.push(parseInt(changeStr[i]));
    }
    
    array2.sort().reverse();
    console.log('array2sort : ', array2);
    
    
    let abc = array2.toString();
    abc.split(',').join('');
    
    console.log(typeof abc)
    console.log(abc);
    
    answer = parseInt(abc.split(',').join(''));

    return answer;
}