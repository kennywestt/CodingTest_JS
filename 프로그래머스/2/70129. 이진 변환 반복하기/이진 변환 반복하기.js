function solution(s) {
    let transformCount = 0; // 변환 횟수
    let totalRemovedZeros = 0; // 제거된 0의 총 개수

    while (s !== "1") {
        const originalLength = s.length;
        const onlyOnes = s.replace(/0/g, "");
        const lengthAfterRemoval = onlyOnes.length;
        totalRemovedZeros += (originalLength - lengthAfterRemoval);
        s = lengthAfterRemoval.toString(2);
        transformCount++;
    }
    return [transformCount, totalRemovedZeros];
}