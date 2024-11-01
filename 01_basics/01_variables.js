const accountId=144553
let accountEmail="abhinavkkunnummal@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;  //Undefined

//accountId=2  //TypeError: Assignment to constant variable.

accountEmail="hc@hc.com"
accountPassword="212121212"
accountCity="Bengaluru"

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

