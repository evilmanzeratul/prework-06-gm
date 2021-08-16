
// Przykład funkcji modulo
console.log('Modulo examples: ');
console.log(3 % 2);
console.log(15 % 2);
console.log(10 % 2);


const array =[]

function generateCheckerboard(times, blackTileChar, whiteTileChar) {

    for (let j = 0; j < 2; j = j + 1){
        array.push([])
        for( let i = 0 ;i <= times; i = i + 1 ){
            if ( i % 2 === 0){
               array[j].push(whiteTileChar)
            }
            else
                array[j].push(blackTileChar)
        }
    }

}

console.log('\n/**************/');
console.log('| CHECKERBOARD |');
console.log('/**************/');

generateCheckerboard(8, '##', '__');

console.log([...array])