const nodemailer = require("nodemailer");
const template =require("./template");

module.exports.sendMail = function(item, email,res){
    const { title, info } = item;
    const { image_url } = info;

    const myEmail = "mastersweb06@gmail.com";
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: myEmail,
            pass: "subirweb",
            clientId: "864731359366-q23p6tomt1le7cqc990luq77io0p05tg.apps.googleusercontent.com",
            clientSecret: "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",
            refreshToken: "1//04IIy1S-5eC9ICgYIARAAGAQSNwF-L9IroqNSkNO3V2sxLmSkN0PkZjvS0cGzt-nGF33OjWqgdX1TmX9_epgvGT4Ai7fJknQHOqw",
        },
    });

    transporter.verify((err, success) => {
        err
            ? console.log(err)
            : console.log(` activo: ${success}`);
    });

    let mailOptions = {
        from: myEmail,
        to: email,
        subject: title,
        html: template.getTemplate(item),
        attachments: [{
            filename: 'img.jpg',
            path: image_url,
            cid: 'img'
        }]
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            res.status(400).json({message: "No se puedo enviar el mensaje",valid:false});
        } else {
            res.status(200).json({message: "Correo enviado exitosamente",valid:true});
        }
    });

}