function waitForTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Готово");
    }, 2000);
  });
}


waitForTwoSeconds()
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.error(error); 
  });
