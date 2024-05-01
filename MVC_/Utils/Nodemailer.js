import nodemailer from "nodemailer";

let testAccount;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "amanheller8833@gmail.com",
    pass: "nnbkqvltmtajptwn", // generated ethereal password
  },
});

export const sendMail = async (str, data) => {
  if (!testAccount) {
    testAccount = await nodemailer.createTestAccount();
  }

  const { Name, Email, Message } = data;
  console.log(data);

  const Osubject =
    str === "formMessage"
      ? `Thank you for Contacting- ${Name}`
      : "Default Subject";

  const Ohtml =
    str === "formMessage"
      ? `
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 80%;
          margin: auto;
          padding: 20px;
          background-color: #f7f7f7;
        }
        h1 {
          color: #333;
        }
        p {
          color: #666;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hope you have a good time!</h1>
        <p>Name: ${Name}</p>
        <p>Email: ${Email}</p>
        <p>Message: ${Message}</p>
        <h1>Good Luck!</h1>
      </div>
    </body>
    </html>
  `
      : "Default HTML";

  const info = await transporter.sendMail({
    from: '"Aman Dubey " <amanheller8833@gmail.com>',
    to: Email,
    subject: Osubject,
    text: "Thanks for contacting i will get back to you as soon a possible",
    html: Ohtml,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
