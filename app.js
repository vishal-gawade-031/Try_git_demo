//add a new feature -add new form
// Example 3: Error handling with promises
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong'));
  }, 1500);
});

errorPromise.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error.message); // Output: Something went wrong
});