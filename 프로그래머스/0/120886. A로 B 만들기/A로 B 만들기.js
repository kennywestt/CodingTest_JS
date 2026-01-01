function solution(before, after) {
    let bef = before.split('').sort().join();
    let aft = after.split('').sort().join();
    return aft == bef ? 1 : 0;
}