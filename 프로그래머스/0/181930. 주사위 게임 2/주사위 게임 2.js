function solution(a, b, c) {
    let answer = 0;
    const oneSquares = a+b+c;
    const twoSquares = a**2 + b**2 + c**2;
    const threeSquares = a**3 + b**3 + c**3
    
    if(a==b && b==c){
        answer = oneSquares * twoSquares * threeSquares;
    } else if ((a==b && b!=c) || (a!=b && b==c) || (a==c && a!=b)) {
        answer = oneSquares * twoSquares;
    } else {
        answer = oneSquares;
    }
    return answer;
}