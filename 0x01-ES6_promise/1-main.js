import getFullResponseFromAPI from './1-promise.js';

console.log(getFullResponseFromAPI(true));
// May produce a warning on the terminal since the rejected promise is not caught
console.log(getFullResponseFromAPI(false));
