//index.js
// const request = require("./request.js");
// const response = require("./response.js");
// module.exports = {
//   request,
//   response,
// };

module.exports={
  ...require('./request'),
  ...require('./response')
}
