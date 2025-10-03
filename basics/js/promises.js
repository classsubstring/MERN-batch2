const promise = new Promise((resolve, reject) => {
  let success = false;
  setTimeout(() => {
    if (success) {
      resolve("promise resolved");
    } else {
      reject("promise rejected");
    }
  }, 5000);
});

async function callingpromise() {
  console.log("Work Started");

  promise
    .then((message) => {
      console.log(`Promise is resolved, we got the message: ${message}`);
    })
    .catch((err) => {
      console.log(`error is ${err}`);
    });
  console.log("Work Ended");
}

callingpromise();
