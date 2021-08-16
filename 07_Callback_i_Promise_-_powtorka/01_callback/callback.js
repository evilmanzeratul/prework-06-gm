/*
  Callbacks
*/
let Callbacks = []

function asynchronousResponse(value, callback) {
    var delay = (Math.floor(Math.random() * 10)) * 1000;
    setTimeout(() => callback(value), delay);
}

    function getAsyncNumber(number) {
        asynchronousResponse(number, function(text){
            Callbacks[number] = { text: text, isDone: false };

            for(let i=0; i<Callbacks.length; i++){
                if (Callbacks[i] === undefined) {
                    return;
                }

                if (!Callbacks[i].isDone) {
                    console.log(Callbacks[i].text);
                    Callbacks[i].isDone = true;
                }
            }
        });


    /*
    Add implementation of getAsyncNumber function in a way that numbers
    appear on a console in order in which they have been called.

   Use asynchronousResponse to generate this responses.
  */
}


getAsyncNumber(0)
getAsyncNumber(1)
getAsyncNumber(2)
getAsyncNumber(3)
getAsyncNumber(4)

