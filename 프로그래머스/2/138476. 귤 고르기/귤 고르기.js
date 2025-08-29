function solution(k, tangerine) {
    // 1) 귤 종류별 개수 세기
    const countMap = new Map();
    for (const t of tangerine) {
        countMap.set(t, (countMap.get(t) || 0) + 1);
    }

    // 2) 개수 기준 내림차순 정렬
    const counts = [...countMap.values()].sort((a, b) => b - a);

    let total = 0; // 담은 귤 개수
    let answer = 0; // 종류 수

    // 3) 개수 많은 것부터 k개 채우기
    for (const c of counts) {
        total += c;
        answer += 1;
        if (total >= k) break;
    }

    return answer;
}
