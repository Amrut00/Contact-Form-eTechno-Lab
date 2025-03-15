const db = require('../config/db');
const transporter = require('../config/email');
const client = require('../config/whatsapp');
require('dotenv').config();

exports.submitForm = async (req, res) => {
    const { name, email, mobile, dob, message } = req.body;

    try {
        const query = 'INSERT INTO submissions (name, email, mobile, dob, message) VALUES (?, ?, ?, ?, ?)';
        db.query(query, [name, email, mobile, dob, message], async (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            const mailOptions = {
                from: `"New Submission" <${process.env.EMAIL_USER}>`,
                to: 'Suraj@etechnolab.com',
                replyTo: email,
                subject: 'New Submission',
                text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nDOB: ${dob}\nMessage: ${message}`,
            };            
            await transporter.sendMail(mailOptions);

            await client.messages.create({
                body: `*New Submission Received* \n\n *Name:* ${name}\n *Email:* ${email}\n *Mobile:* ${mobile}\n *DOB:* ${dob}\n *Message:* ${message}`,
                from: process.env.TWILIO_WHATSAPP_NUMBER,
                to: process.env.ADMIN_WHATSAPP_NUMBER,
            });

            res.status(200).json({ message: 'Submission successful!' });
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
