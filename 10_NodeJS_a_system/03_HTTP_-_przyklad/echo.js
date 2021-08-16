const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Triggers request to the server with given phrase
 */
const request = (phrase) =>{
  // Prepare request payload
  const options = {
    port: 8080,
    host: '127.0.0.1',
    method: 'POST'
  };

  const req = http.request(options);
  req.write(phrase);
  req.end();
};

// This code repeats itself over and over again, asking for input
const echo = () => {
  // This callback is called once you press enter
  rl.question('Echo: ', (answer) => {
    // ADD MISSING CODE HERE
    setTimeout(function () {
      request();
    }, 500);
    setTimeout(function () {
      request();
    }, 1000);
    setTimeout(function () {
      request();
    }, 2000);

    // This triggers echo listener again - do not modify line below!
    echo();
  });
};

echo();


// cos jest nie tak bo nie wyskakują trzy kropki