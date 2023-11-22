const nodemailer = require('nodemailer');
const speakeasy = require('speakeasy');

module.exports.sendEmail = async (sendTo, item, quantity) => {
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: `${process.env.EMAIL_ID}`,
			pass: `${process.env.PASSWORD}`,
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: "Support From 86 No More csc520group19@gmail.com",
		to: sendTo, // list of receivers
		subject: "Inventory Alert", // Subject line
		text: "You are running low on " + item + ". You just have "+quantity+" units left.", // plain text body
	});
	console.log("Message sent: %s", info.messageId);
};

module.exports.sendOTP = async (sendTo, otp) => {
	try{
		const otp = speakeasy.totp({
            secret: process.env.OTP_SECRET, // Use a secret key (you need to store this securely)
            encoding: 'base32',
        });
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "csc520group19@gmail.com",
			pass: "imotxksrsaapmfid",
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: "From 86 No More csc520group19@gmail.com",
		to: sendTo, // list of receivers
		subject: "Verify Email", // Subject line
		text: "Your otp is " + otp, // plain text body
	});
	console.log("Message sent: %s", info.messageId);
} catch (error) {
	console.error('Error sending OTP:', error);
	throw error;
}

	
};