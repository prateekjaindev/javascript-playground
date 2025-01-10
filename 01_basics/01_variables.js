const accountId = 173883
let accountEmail = "prateek@tech.com"
var accountPassword = "12344"
accountCity = "Pune"
let accountState

// accountId = 2     Not allowed

accountEmail = "jp@tech.com"
accountPassword = "182720"
accountCity = "Mumbai"


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
because of issue in block scope and functional scope
*/