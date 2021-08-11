let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = false;

let age = 19;

if(age > 18 && registeredEarly){
  raceNumber += 1000
}
if((age > 18) && (registeredEarly=true)){
  console.log(`${raceNumber} run at 9:30 am`)
}else if((age > 18) && (registeredEarly=false)){
  console.log(`${raceNumber} run at 11:00 am`)
} else if (age < 18) {
  console.log(`Race will begin at 12:30. Your race number is: ${raceNumber}.`);
} else {
  console.log('Please report to the registration desk, thanks!');
}
