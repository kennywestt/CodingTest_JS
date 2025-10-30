function solution(todo_list, finished) {
    let answer = [];
    console.log(todo_list, finished)
    let index = []
    finished.map((v,i)=> {
        if(v==false){
            index.push(i);
        }
    })
    console.log(index)
    for(let i = 0; i<index.length; i++){
        answer.push(todo_list[index[i]]);
    }
    
    return answer;
}