
function solution(s) {
    const num = {
         "zero":"0",
         "one":"1",
         "two":"2",
         "three":"3",
         "four":"4",
         "five":"5",
         "six":"6",
         "seven":"7",
         "eight":"8",
         "nine":"9",
    };
    
    let answer = '';
    let currentWords = '';
    console.log(s);
    
    for(let i=0; i <= s.length; i++){
        if('0123456789'.includes(s[i])){
          answer += s[i];
            console.log('if: ',s[i]);
          }else{
              currentWords +=s[i]
              
              if(num[currentWords]) {
                  answer += num[currentWords];
                  currentWords='';
              }
              console.log('else: ',s[i])
              console.log('currentWords : ',currentWords)
          }
    }
    return parseInt(answer);
}