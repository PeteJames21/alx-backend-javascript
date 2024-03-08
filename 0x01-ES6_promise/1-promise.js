/**
 * Return a promise which resolves if the arg is `true`, and is rejected otherwis
 * @param {boolean} success
 * @returns a promise
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
