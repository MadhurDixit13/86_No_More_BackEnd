const nodemailer = require('nodemailer');

module.exports.sendEmail = async (sendTo, item, quantity) => {
	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: "86.no.more.help@gmail.com",
			pass: "rsqvuknhmeprjqil",
		},
	});

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: "Support From 86 No More no.more.help@gmail.com",
		to: sendTo, // list of receivers
		subject: "Inventory Alert", // Subject line
		text: "You are running low on " + item + ". You just have "+quantity+" units left.", // plain text body
	});
	console.log("Message sent: %s", info.messageId);
};
