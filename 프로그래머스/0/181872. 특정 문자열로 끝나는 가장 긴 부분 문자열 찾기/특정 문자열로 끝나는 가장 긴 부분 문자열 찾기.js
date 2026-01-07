function solution(myString, pat) {
    for (let i = myString.length; i >= pat.length; i--) {
        if (myString.substring(i - pat.length, i) === pat) {
            return myString.substring(0, i);
        }
    }
}