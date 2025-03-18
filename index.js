function scuberGreetingForFeet(feet){
  // Write your code here!
  let charge 
  if (feet <=400) {
    charge = 0;
    return('This one is on me!');
  }
  else if (feet <2000 && feet > 400) {
    return(`That will be twenty bucks.`);
  }
  else if (feet > 2000 && feet <= 2500) {
    return('I will gladly take your thirty bucks.');
  }
  else {
    return("No can do.");
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? ('Ok, sounds good.')
  : ("No go.")
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip === "generous"){
    return("Thank you so much.");
  }
  else if (tip === "not as generous"){
    return("Thank you.");
  }
  else {
    return("Bye.")
  }
}