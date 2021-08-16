/*
  Promises
*/



function promiseResponse(value, callback) {
    var delay = (Math.floor(Math.random() * 10)) * 1000;
    setTimeout(() => callback (value), delay);
}

function getAsyncNumber(number) {
    return new Promise((resolve) => {
      promiseResponse(number, resolve);
    });

  /*
    Add implementation of getAsyncNumber function in a way
    that when called it returns a Promise object.

    
    Use promiseResponse to generate this responses.
  */
}

const number0Promise = getAsyncNumber(0);
const number1Promise = getAsyncNumber(1);
const number2PRomise = getAsyncNumber(2);
const number3PRomise = getAsyncNumber(3);
const number4PRomise = getAsyncNumber(4);


number0Promise
    .then(console.log)
    .then(() => number1Promise)
    .then(console.log)
    .then(() => number2PRomise)
    .then(console.log)
    .then(() => number3PRomise)
    .then(console.log)
    .then(() => number4PRomise)
    .then(console.log)


/*
  Add a code to display on console numbers 
  in order in which they have been called.

  Use methods from Promise API.
*/