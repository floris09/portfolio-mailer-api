const router = require('express').Router()
const nodemailer = require('nodemailer');

router
  .post('/mailer', (req, res, next) => {
    const body = req.body

    const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    console.log(process.env.EMAIL)

    const mailOptions = {
      from: body.email, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: 'New mail from your portfolio website', // Subject line
      html: `<p>New message from ${body.firstName} ${body.lastName}.<br>Phone number: ${body.phone} <br>Email address: ${body.email}. <br>Message: ${body.message} </p>`// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
       if(err)
         console.log(err)
       else
         console.log(info);
    });
  });

module.exports = router
