let input = 'turpentine and turtles';
let vowels = ['a','e','i','o','u'];
let resultArray = [];
let myArray = '';
for(let i=0; i<input.length; i++){
  //console.log('i is '+ i);
  for(let j=0; j<vowels.length; j++){
     //console.log('j is '+ j);
     if(input[i] === vowels[j]){
       resultArray.push(input[i]);
       if(input[i]==='e'){
         resultArray.push(input[i]);
       }else if(input[i]==='u'){
         resultArray.push(input[i]);
       }
     }
    //console.log(j)
  }
}
console.log(resultArray.join('').toUpperCase());
