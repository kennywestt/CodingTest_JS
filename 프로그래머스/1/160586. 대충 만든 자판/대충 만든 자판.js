function solution(keymap, targets) {
    const minPresses = new Map();

    for (const key of keymap) {
        for (let i = 0; i < key.length; i++) {
            const char = key[i];
            const currentPress = i + 1;

            const existingPress = minPresses.get(char);
            
            if (existingPress === undefined || currentPress < existingPress) {
                minPresses.set(char, currentPress);
            }
        }
    }
    
    const result = [];
    
    for (const target of targets) {
        let totalPresses = 0;
        let possible = true;

        for (const char of target) {
            const presses = minPresses.get(char);
            
            if (presses === undefined) {
                possible = false;
                break;
            }
            
            totalPresses += presses;
        }
        if (possible) {
            result.push(totalPresses);
        } else {
            result.push(-1);
        }
    }

    return result;
}