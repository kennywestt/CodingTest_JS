function solution(myString, pat) {
    let count = 0;
    for (let i = 0; i <= myString.length - pat.length; i++) {
        const subStr = myString.slice(i, i + pat.length);
        if (subStr === pat) {
            count++;
        }
    }
    return count;
}