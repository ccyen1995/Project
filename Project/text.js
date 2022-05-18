fetch("https://randomuser.me/api/")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
