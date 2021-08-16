const departureTime = new Date (`2020-10-10T12:30+01:00`);

/**
 * Modify this function to return proper arrival for Larry
 */
function calculateArrival(departure) {
  return departure.setHours(20,40)
}

const arrivalTime = calculateArrival(departureTime)
arrivalTime.toLocaleString('pl-PL', { timeZone: 'Australia/Sydney'})

console.assert(arrivalTime === '11.10.2020, 19:10:00', 'Wrong arrival time: ', arrivalTime);
