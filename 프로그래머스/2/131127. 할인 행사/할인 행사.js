function solution(want, number, discount) {
    let answer = 0;
    const wantMap = {};
    want.forEach((item, idx) => {
        wantMap[item] = number[idx];
    });

    for (let i = 0; i <= discount.length - 10; i++) {
        const currentDiscountMap = {};
        for (let j = i; j < i + 10; j++) {
            const item = discount[j];
            currentDiscountMap[item] = (currentDiscountMap[item] || 0) + 1;
        }
        if (isMatch(wantMap, currentDiscountMap)) {
            answer++;
        }
    }
    return answer;
}

function isMatch(wantMap, currentMap) {
    for (const key in wantMap) {
        if (currentMap[key] !== wantMap[key]) {
            return false;
        }
    }
    return true;
}