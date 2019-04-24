const {
  Router
} = require('express');
const router = new Router();
var nodemailer = require('nodemailer');
router.post('/send-email',function (req, res) {
    var body = req.body;
    let name = body.name
    let lastname = body.lastname
    let nameBusiness = body.nameBusiness
    let email = body.email
    let tel = body.tel
    let message = body.message
    let country = body.country
    let categories = body.categories
    let findContact = body.findContact

    async function main() {
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        // requireTLS: true,
        auth: {
          user: 'info@plugdo.com',
          pass: 'Panama2000',
        }
      });
      let mailOptions = {
        from: 'info@plugdo.com',
        to: "info@plugdo.com",
        subject: `Contacto de Guialook ${name} ${lastname}`,
        text: message,
        html: `<h1>Contacto Pagina Guialook</h1>       
        <ul>
        <li >Nombre : ${name}</li>
        <li >Apellido : ${lastname}</li>
        <li >Nombre del Local  : ${nameBusiness}</li>
        <li >Email : ${email}</li>
        <li >Telefono : ${tel}</li>
        <li >Mensage : ${message}</li>
        <li >Pais : ${country}</li>
        <li >Categoria de Interes : ${categories}</li>
        <li > Nos encontro por  : ${findContact}</li>
      </ul>
        `,
      };
      let info = await transporter.sendMail(mailOptions)
      // console.log("Message sent: %s", info.messageId);
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
    res.statusCode = 400
    res.end()
  })
module.exports = router;