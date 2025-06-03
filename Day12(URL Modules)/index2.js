function getAPIData() {
  fetch("http://localhost:4000/")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}

getAPIData();