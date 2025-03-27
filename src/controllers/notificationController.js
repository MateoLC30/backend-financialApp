import nodemailer  from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import { connect } from "../database.js";

export const notification = async (req, res) => {

    const { email } = req.body;
    const connection = await connect();
    const uuid = uuidv4();

    try {
       
        console.log('mail requerido: ' + email);
        
        if(!email) {
            return res.status(400).json('no email')} 

        const [rows] = await connection.query("SELECT * FROM users WHERE email = ?", [email]);

        if (rows.length === 0 ) {
            return res.status(404).json({ error: 'User not found' });
        }

        const [existingReset] = await connection.query('SELECT * FROM resets_password WHERE email = ?', [email]);

        if(existingReset.length > 0) {
            await connection.query('UPDATE resets_password SET token = ? WHERE email = ?', [uuid, email])
        } else {
            await connection.query('INSERT INTO resets_password (email, token) VALUES (?,?)', [email, uuid])
        }

        res.status(200).json({ message: 'Correo de recuperación enviado'})

    } catch (error) {
        return res.status(400).json(error.message);
    }

//console.log("usuario: " + process.env.AUTH_EMAIL,  "password: " + process.env.AUTH_EMAILPASS);

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure: true,
    service: 'gmail',
    auth: {
      user: process.env.AUTH_EMAIL,
      pass: process.env.AUTH_EMAILPASS,
    }
  });

const mailOptions = {
    from: `"Forgot your password" <${process.env.AUTH_EMAIL}>`,
    to: email,
    subject: 'Forgot your password',
    html: 
    `<html>
        <h1>Reset password</h1>
        <p>Click on the link below to reset your password:</p>
        <a href="http://localhost:3000/resetPassword/${uuid}">Reset password</a>
        <p>If you didn't request this, please ignore this email</p>
    </html>`,
  };

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response)
    }
});  
}