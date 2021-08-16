/*
  Async-Await
*/
// nie odpala się npm run async_await !!!!!

function promiseResponse(value, callback) {
  var delay = (Math.floor(Math.random() * 10)) * 1000;  
  setTimeout(() => callback(value), delay);
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
const number2Promise = getAsyncNumber(2);
const number3Promise = getAsyncNumber(3);
const number4Promise = getAsyncNumber(4);

async function f() {
  const data = await getAsyncNumber();
  console.log(data);
}
/*
  Add a code to display on console numbers 
  in order in which they have been called.

  Use async/await methods.
*/