/**
 * Wybiera sposób transportu
 * @param distance - dystans w metrach
 * @param weather - pogoda - jeden z `fair`, `rain` i `snow`
 * @returns string środek transportu - `car`, `bicycle` albo `walking`
 */
function chooseTransportationMode(distance, weather) {
    if (weather === `snow`){
        console.log('jade autem')
    }
    else if (weather === `rain` && distance < 500){
        console.log ("ide pieszo")
    }
    else if (weather === `rain` && distance >= 500 && distance <= 2000){
        console.log("jade rowerem ")
    }
    else if (weather === `rain` && distance >= 2000){
        console.log('jade autem')
    }
    else if (weather === `fair` && distance < 1000){
        console.log ("ide pieszo")}

    else if (weather === `fair` && distance >= 1000 && distance <= 4000){
            console.log("jade rowerem ")}

    else if (weather === `fair` && distance >= 4000){
        console.log('jade autem')}
        else { console.log("error")}
    }

// Nie modyfikuj poniższych funkcji!
// Jeśli zaimplementujesz funkcję poprawnie, te wykonają się też poprawnie
console.assert(chooseTransportationMode(300, 'snow') === 'car', 'Wrong mean of transportation', chooseTransportationMode(300, 'snow'));
console.assert(chooseTransportationMode(1600, 'snow') === 'car', 'Wrong mean of transportation', chooseTransportationMode(1600, 'snow'));
console.assert(chooseTransportationMode(300, 'rain') === 'walking', 'Wrong mean of transportation', chooseTransportationMode(300, 'rain'));
console.assert(chooseTransportationMode(2000, 'rain') === 'bicycle', 'Wrong mean of transportation', chooseTransportationMode(2000, 'rain'));
console.assert(chooseTransportationMode(2500, 'rain') === 'car', 'Wrong mean of transportation', chooseTransportationMode(2500, 'rain'));
console.assert(chooseTransportationMode(999, 'fair') === 'walking', 'Wrong mean of transportation', chooseTransportationMode(999, 'fair'));
console.assert(chooseTransportationMode(4000, 'fair') === 'bicycle', 'Wrong mean of transportation', chooseTransportationMode(4000, 'fair'));
console.assert(chooseTransportationMode(6000, 'fair') === 'car', 'Wrong mean of transportation', chooseTransportationMode(6000, 'fair'));
