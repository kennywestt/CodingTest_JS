function solution(wallpaper) {
    const rows = wallpaper.length;
    const cols = wallpaper[0].length;
    
    let minR = rows; 
    let minC = cols; 
    let maxR = 0; 
    let maxC = 0; 

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (wallpaper[r][c] === '#') {
                minR = Math.min(minR, r);
                minC = Math.min(minC, c);
                maxR = Math.max(maxR, r);
                maxC = Math.max(maxC, c);
            }
        }
    }
    return [minR, minC, maxR + 1, maxC + 1];
}