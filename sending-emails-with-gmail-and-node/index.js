const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'youremail@gmail.com',
      pass: 'apppassword'
  }
});


transporter.sendMail({
  from: '"Edigeysson Cursos" <youremail@gmail.com>', // sender address
  to: "to@gmail.com", // list of receivers
  subject: "Medium @edigleyssonsilva ✔", // Subject line
  text: "There is a new article. It's about sending emails, check it out!", // plain text body
  html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body

}).then(info => {
  console.log({info});
}).catch(console.error);