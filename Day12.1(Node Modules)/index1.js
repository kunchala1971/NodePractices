var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kkcc.ong@gmail.com",
    pass: "123123",
  },
});
var options = {
  from: "kkcc.ong@gmail.com",
  to: "kunchalasrinivasarao1971@gmail.com",
  subject: "Test Mail",
  text: "Hello students how are you",
};
transporter.sendMail(options, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email is Successfuly Sended" + info.response);
  }
});
