/**
 * Zwraca kombinację dwóch sylab
 * @param firstSyllable - jaka ma być pierwsza sylaba
 * @param secondSyllable - jaka ma być druga sylaba
 * @returns {string}
 */
function foobar(firstSyllable, secondSyllable) {
    const x = firstSyllable ? 'foo' : 'bar';
    const y = secondSyllable ? 'foo' : 'bar';
    console.log(x, y)

}
    console.assert(foobar(true, true) === 'foofoo', 'Wrong phrase!');
    console.assert(foobar(true, false) === 'foobar', 'Wrong phrase!');
    console.assert(foobar(false, true) === 'barfoo', 'Wrong phrase!');
    console.assert(foobar(false, false) === 'barbar', 'Wrong phrase!');
