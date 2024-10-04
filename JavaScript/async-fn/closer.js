// closure is a function which remember the env which is created;
function outer() {
  let count = 9
  return function (){
    count++
    return count
  }
}

let ans = outer()
console.log(ans());
console.log(ans());
console.log(ans());
console.log(ans());
