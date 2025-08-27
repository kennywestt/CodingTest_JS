function solution(s) {
    return s
        .split(' ')
        .map(word => {
            if (word === "") return ""; // 연속된 공백 처리
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(' ');
}