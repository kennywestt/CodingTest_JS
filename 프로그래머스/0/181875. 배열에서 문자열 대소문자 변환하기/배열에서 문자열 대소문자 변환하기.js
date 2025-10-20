function solution(strArr) {
    let changeStr = [...strArr].map((v,i)=> i%2==0 ? v.toLowerCase() : v.toUpperCase())
    return changeStr;
}