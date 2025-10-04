function solution(strings, n) {
    let mapped = strings.map(str => [str[n], str]);
    mapped.sort((a, b) => a[0] === b[0] ? a[1].localeCompare(b[1]) : a[0].localeCompare(b[0]));
    return mapped.map(item => item[1]);
}