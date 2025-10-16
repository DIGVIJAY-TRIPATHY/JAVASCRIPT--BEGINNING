const accountId = 144553
let accountEmail ="www.gmail.com"
var accountPassword =  "12345"
// prefer not to use var because of its scope issues
let accountState
accountCity = "New York"

// accountId = 123456

accountEmail = "www.yahoo.com"
accountPassword = "54321"
accountCity = "Los Angeles"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
