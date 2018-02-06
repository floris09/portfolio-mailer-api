const router = require('express').Router()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

router
  .post('/mailer', (req, res, next) => {
    let body = req.body

    const mailOptions = {
      from: body.email, // sender address
      to: 'florismeininger@gmail.com', // list of receivers
      subject: 'New mail from your portfolio website', // Subject line
      html: `<p>New message from ${body.firstName} ${body.lastName}.\n Phone number: ${body.phone} \n ${body.message} </p>`// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
       if(err)
         console.log(err)
       else
         console.log(info);
    });
  });

module.exports = router
