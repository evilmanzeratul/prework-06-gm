const fs = require('fs');

// Implement reading / writing the files below
const path = require('path');
function playGame() {
const text = fs.readFileSync("./game.txt")
    const words = text.split('');
    const word1 = fs.writeFileSync(path.join(__dirname, "result.txt"),'- PONG!')
    const word2 = word[1]
    return join.word2( word1, '\r\n')


}

playGame();

// ASSERTION BELOW - we read result.txt file and check if result is aligned with expected one
const expected = '' +
  `PING! - PONG!
PING! - PONG!
PING! - PONG!
PING! - PONG!
PING! - PONG!
PING! - PONG!`;

const resultFileContent = String(fs.readFileSync('./result.txt'));
console.assert(resultFileContent === expected, 'Ping pong game not complete!', resultFileContent);
