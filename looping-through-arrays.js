const pets = ['cat', 'dog', 'rat'];
//The length method is what I was missing!
for (let i = 0; i < pets.length; i++) {
  pets[i] = pets[i] + 's';
}
console.log(pets);