import nodemailer from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export const sendMail = async function sendMail(str, data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "amanheller8833@gmail.com", // generated ethereal user
      pass: "nnbkqvltmtajptwn", // generated ethereal password
    },
  });

  var Osubject, Ohtml;

  if (str == "formMessage") {
    Osubject = `Thank you for Contacting- ${data.Name}`;
    Ohtml = `
    <h1>    
    hope you have good time!</h1>
  <br/>
    Name - ${data.Name} <br/>
    Email - ${data.Email} <br/>
    Message - ${data.Message} <br/>  <h1>    
   Good Luck!</h1>;`;
  }

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Aman Dubey " <amanheller8833@gmail.com>', // sender address
    to: data.Email, // list of receivers
    subject: Osubject, // Subject line
    text: "thanks for being here", // plain text body
    html: Ohtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
