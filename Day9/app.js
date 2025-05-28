const axios = require("axios");

// axios
//   .get("https://google.com")
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then(() => {
//     console.log("The Get Process is Completed");
//   });

const data=axios.get("https://google.com");
  data.then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => {
    console.log("The Get Process is Completed");
  });

