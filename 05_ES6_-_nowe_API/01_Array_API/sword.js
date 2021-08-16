const BLADE_CHARACTER = 'Ξ';
const SWORD_PATTERN = '{}oo((X))>';

/**
 * Should generate sword with proper blade length
 */
function sword(length) {
  // First = create array from sword pattern
  const all = Array.from(SWORD_PATTERN)
  // Second - create two arrays from sword pattern array
  const handle = all.slice(0, 9)
  const eage = all.slice(9, 10)
  // Third = create blade pattern, using `Array(x).fill(''); with proper length and character
  const blade = Array(length).fill(BLADE_CHARACTER)
  // Fourth - concatenate the arrays and join with empty character, using `join('')`
  const sword1 = handle.concat(blade,eage)

  const swordJoin = sword1.join('')
  console.log(swordJoin)
  return swordJoin;
}

const shortSword = sword(5);
console.assert(shortSword === '{}oo((X))ΞΞΞΞΞ>', 'Sword does not look properly: ', shortSword);

const longSword = sword(15);
console.assert(longSword === '{}oo((X))ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ>', 'Long sword does not look properly: ', longSword);
