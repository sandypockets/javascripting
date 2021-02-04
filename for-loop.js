let total = 0;
let limit = 10;
//i starts at zero.
//the loop runs while i being less than limit is true.
//each loop, i is incremented up by 1.
//During each loop, the total of i is then added to total,
//making each of the increments cumulative.
//log the total to the console, 45.
for (let i = 0; i < limit; i++) {
  total += i;
}
console.log(total);