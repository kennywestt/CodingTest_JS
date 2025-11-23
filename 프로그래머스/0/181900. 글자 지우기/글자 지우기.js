function solution(my_string, indices) {
    let filterStr = [];

    for(let i =0; i<my_string.length; i++){
        filterStr.push(my_string[i])
           for(let j=0; j<indices.length; j++){
            if(i == indices[j]){
                filterStr.pop();
            }
        }
    }
    return filterStr.join('');
}