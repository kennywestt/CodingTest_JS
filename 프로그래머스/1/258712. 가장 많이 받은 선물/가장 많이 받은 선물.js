function solution(friends, gifts) {
    const N = friends.length;
    const nameToIndex = new Map();
    friends.forEach((name, index) => {
        nameToIndex.set(name, index);
    });
    const records = Array.from({ length: N }, () => new Array(N).fill(0));
    const giftIndex = new Array(N).fill(0);

    const nextMonthGifts = Array.from({ length: N }, () => 0);

    for (const gift of gifts) {
        const [giver, receiver] = gift.split(" ");
        const giverIndex = nameToIndex.get(giver);
        const receiverIndex = nameToIndex.get(receiver);

        records[giverIndex][receiverIndex]++;

        giftIndex[giverIndex]++;
        giftIndex[receiverIndex]--;
    }

    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {

            const iToj = records[i][j];
            const jToi = records[j][i];

            if (iToj > jToi) {
                nextMonthGifts[i]++;
            } else if (iToj < jToi) {
                nextMonthGifts[j]++;
            } else {
                const iIndex = giftIndex[i];
                const jIndex = giftIndex[j];

                if (iIndex > jIndex) {
                    nextMonthGifts[i]++;
                } else if (iIndex < jIndex) {
                    nextMonthGifts[j]++;
                }
            }
        }
    }
    const answer = Math.max(...nextMonthGifts);

    return answer;
}