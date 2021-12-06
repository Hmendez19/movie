const express = require("express");
const app = express();
const cors = require("cors");
const mailmanager=require('./MailManager');
const port = 3004;

// middleware
app.use(express.json());
app.use(cors());


app.post("/send", function (req, res) {
    console.log(req.body);
    mailmanager.sendMail(req.body.item,req.body.email,res);
});

app.listen(port, () => {
 console.log(`Servidor corriendo en el puerto: ${port}`);
});