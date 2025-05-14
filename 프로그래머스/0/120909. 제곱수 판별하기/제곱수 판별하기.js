function solution(n) {
    var result = 0;
    var k = parseInt(Math.sqrt(n));
    
    if( Math.sqrt(n) === k ){
        result = 1;
    } else {
        result = 2;
    }
    return result;
}