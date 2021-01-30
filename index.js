var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'shelby';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
// If you try to use `return`, it will return 'BOB' but it will not re-define the variable

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'ian';
}

changeLeastFavoriteCustomer();
// Uncaught SyntaxError: Identifier 'leastFavoriteCustomer' has already been declared