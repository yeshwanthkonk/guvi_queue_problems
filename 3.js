// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  let arr = userInput[0];
  let queue = [];
  let operator = ["+", "*", "/", "-", "%"];
  let valid = true;
  for(let i=0;i<arr.length;i++){
      if(operator.indexOf(arr[i])>=0){
          if(queue.length <= 1){
            valid = false;
            break;
          }
          queue.reverse();
          let res = parseInt(eval(queue[1]+arr[i]+queue[0]));
          queue.shift();
          queue.shift();
          queue.reverse();
          queue.push(res);
      }
      else
        queue.push(arr[i]);
  }
  if(valid && queue.length===1)
    console.log(queue[0]);
  else
    console.log(-1);

  //end-here
});
