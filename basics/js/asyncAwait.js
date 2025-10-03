const promise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      return resolve("promise Resolved");
    } else {
      return reject("Promise rejected");
    }
  }, 1000);
});

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data.userId);
    fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        // console.log(data);
        fetch("https://jsonplaceholder.typicode.com/comments");
      });
  })
  .catch((error) => {
    console.error(error);
  });

//   async await

async function printData() {
  try {
    const resopnse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await resopnse.json();
    console.log(data);

    const secondResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${data.userId}`
    );
    const srData = await secondResponse.json();
    console.log(srData);
  } catch (error) {
    console.log(error);
  }
}
