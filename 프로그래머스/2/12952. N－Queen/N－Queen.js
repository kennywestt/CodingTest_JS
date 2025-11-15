function solution(n) {
    let answer = 0;

    const col = Array(n).fill(false);               // 세로(열) 사용 여부
    const diag1 = Array(2 * n).fill(false);         // 오른쪽아래 대각선 (row + col)
    const diag2 = Array(2 * n).fill(false);       // 왼쪽아래 대각선 (row - col + n - 1)

    function backtrack(row) {
        if (row === n) {
            answer++;
            return;
        }

        for (let c = 0; c < n; c++) {
            if (col[c] || diag1[row + c] || diag2[row - c + n - 1]) continue;
            col[c] = diag1[row + c] = diag2[row - c + n - 1] = true;
            backtrack(row + 1);
            col[c] = diag1[row + c] = diag2[row - c + n - 1] = false;
        }
    }

    backtrack(0);
    return answer;
}
