const BLADE_CHARACTER = 'Ξ';
const SWORD_PATTERN = '{}oo((X))>';

/**
 * Should generate sword with proper blade length
 */
function sword(length) {
  // First - create two string variables from sword pattern
  const handle = SWORD_PATTERN.substring(0, 9)
  const eage = SWORD_PATTERN.substring(9, 10)
  // Prepare the blade
  const blade = BLADE_CHARACTER.repeat(length)
  // Glue the parts together and return whole sword
  const sword1 = handle + blade + eage
  console.log(sword1)
  return sword1;

}

const shortSword = sword(5);
console.assert(shortSword === '{}oo((X))ΞΞΞΞΞ>', 'Sword does not look properly: ', shortSword);

const longSword = sword(15);
console.assert(longSword === '{}oo((X))ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ>', 'Long sword does not look properly: ', longSword);
