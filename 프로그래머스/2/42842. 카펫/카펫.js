function solution(brown, yellow) {
    const total = brown + yellow;
    
    for (let h_y = 1; h_y * h_y <= yellow; h_y++) {
        if (yellow % h_y === 0) {
            const w_y = yellow / h_y;
            const W = w_y + 2;
            const H = h_y + 2;
            
            if (W * H === total) {
                return [W, H];
            }
        }
    }
}