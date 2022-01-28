const range = function(start, end, step) {
  let arr = []
  if(step >= 0 && start < end && typeof (start + end + step) === 'number'){
    let i = start
    while(i <= end){
      arr.push(i)
      i += step
    }
    return arr
  } else {
    return arr
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));