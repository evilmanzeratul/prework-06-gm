const dwarves = ['Dopey', 'Sneezy', 'Bashful', 'Doc', 'Happy', 'Grumpy', 'Sleepy'];

function hailDwarves(dwarfNames) {
  // To jest fraza początkowa. Nie zmieniaj jej!
  let phrase = 'Dinner is ready! Come home ';

  // Tutaj umieść swoją pętlę


  for (const [key,value] of dwarfNames.entries() ) {
    phrase += dwarfNames
  }
  phrase += " and Sleepy !"
  // nie wiem jak skasować sleepy

  return phrase;
}

console.assert(
  hailDwarves(dwarves) ===
  'Dinner is ready! Come home Dopey, Sneezy, Bashful, Doc, Happy, Grumpy and Sleepy!', 'Wrong greeting phrase:', hailDwarves(dwarves));
