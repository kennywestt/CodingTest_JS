function solution(a, b, n) {
    let colaTotal = 0;
    let emptybottles = n;
    
    while(emptybottles >= a){
        const newCola = Math.floor(emptybottles / a) * b
        colaTotal += newCola;
        emptybottles = Math.floor(emptybottles % a) + newCola
    } 
    return colaTotal;
}