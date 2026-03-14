const accountId = 10
let accountEmail = "nayan@gmail.com"
var accountPassword = "123456"
accountCity = "Porbandar"
let accountState;

// accountId = 11 // not allowed

accountEmail = "gohel@gmail.com"
accountPassword = "123"
accountCity = "Ahmedabad"


console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])