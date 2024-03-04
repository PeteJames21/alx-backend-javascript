/**
 * Concatenate 2 arrays and each character of a string
 *
 * @param {Array} array1
 * @param {Array} array2
 * @param {string} string
 * @returns
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
