// Możesz użyć tego obiektu jako bazy do kolejnych ptaków
const birdSpeciesObj = {
  species: '',
  dominantColor: '',
  size: '' // small || medium || large
};
const bird1 = {
  species: 'sikorka bogatka',
  dominantColor: 'yellow',
  size: 'medium' // small || medium || large
};
const bird2 = {
  species: 'wróbel domowy',
  dominantColor: 'grey',
  size: 'small' // small || medium || large
};
const bird3 = {
  species: 'dzięcioł duży',
  dominantColor: 'grey',
  size: 'medium' // small || medium || large
};
const bird4 = {
  species: 'sokół',
  dominantColor: 'brown',
  size: 'large' // small || medium || large
};

function reportBird(date, certainty) {
  if (!(date instanceof Date)) {
    throw new Error('Passed date is not a proper Date object!');
  }

  if (certainty < 0 || certainty > 1) {
    throw new Error('Recognition certainty has to be between 0 and 1');
  }

  if (!this.species) {
    throw new Error('No context bound for recognition - add a proper bird species context!');
  }
  console.log(
    '[' + date + '] Identified bird: ' + this.species +
    ', dominant color: ' + this.dominantColor +
    ', size: ' + this.size +
    ', recognition certainty: ' + certainty
  )

  console.log("kurwa")
}
reportBird.call( bird1, new Date(), 1 )
reportBird.call( bird2, new Date(), 1 )
reportBird.call( bird3, new Date(), 1 )
reportBird.call( bird4, new Date(), 1 )
reportBird.apply( bird1, [new Date(), 1])
reportBird.apply( bird2, [new Date(), 1])
reportBird.apply( bird3, [new Date(), 1] )
reportBird.apply( bird4, [new Date(), 1] )