const { parse } = require("csv-parse");
const fs = require("fs");
const results = [];
function filterData(arg) {
  return arg["koi_disposition"] === "CONFIRMED" && arg["koi_insol"] > 0.36;
}
fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (filterData(data)) {
      results.push(data);
    }
  })

  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(results);
    console.log("done");
  });
