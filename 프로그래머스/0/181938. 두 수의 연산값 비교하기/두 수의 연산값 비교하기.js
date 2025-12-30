function solution(a, b) {
    let times = 2*a*b
    let pp = a.toString()+b.toString()
    return times>parseInt(pp) ? times : parseInt(pp);
}