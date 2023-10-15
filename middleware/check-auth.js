const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	if (req.method === "OPTIONS") {
		return next();
	}
	try {
		if (!req.headers.authorization) {
			return res.json(403, {
				message: "Token not found",
			  });
		}
		const token = req.headers.authorization.split(" ")[1]; //Authorization: 'Bearer TOKEN'
		if (!token) {
			return res.json(403, {
				message: "Authentication failed",
			  });
		}
		console.log(token);
		const decodedToken = jwt.verify(token, "caloriesapp");
		console.log(decodedToken);
		req.userData = { userId: decodedToken._id };
		req.userData.email = decodedToken.email;
		next();
	} catch (err) {
		console.log(err);
		return res.json(500, {
			message: "Internal Server Error",
		  });
	}
};
