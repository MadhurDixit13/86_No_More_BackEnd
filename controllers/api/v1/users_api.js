const User = require("../../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Food = require("../../../models/food");
const History = require("../../../models/history");
const Job = require("../../../models/job");
const Application = require("../../../models/application");
const Inventory = require("../../../models/inventory");
const Menu = require("../../../models/menu");

module.exports.createSession = async function (req, res) {
	try {
		let user = await User.findOne({ email: req.body.email });
		if (!user) {
			return res.json(422, {
				message: "Invalid username or password",
			});
		}
		let isValidPassword = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isValidPassword) {
			return res.json(422, {
				message: "Invalid username or password",
			});
		}

		return res.json(200, {
			message: "Sign In Successful, here is your token, please keep it safe",
			data: {
				token: jwt.sign(user.toJSON(), "caloriesapp", { expiresIn: "10 days" }),
				user: user,
			},
			success: true,
		});
	} catch (err) {
		console.log("*******", err);
		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};

module.exports.createHistory = async function (req, res) {
	try {
		let history = await History.create({
			date: req.body.date,
			caloriesgain: req.body.total,
			caloriesburn: req.body.burnout,
			user: req.body.id,
		});

		return res.json(200, {
			message: "History Created Successfully",

			data: {
				history: history,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};

module.exports.signUp = async function (req, res) {
	try {
		if (req.body.password != req.body.confirm_password) {
			return res.json(422, {
				message: "Passwords do not match",
			});
		}

		let user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.json(401, {
				message: "User already exists",
				success: false,
			});
		}
		if (!user) {
			let hashedPassword = await bcrypt.hash(req.body.password, 12);
			req.body.password = hashedPassword;
			console.log(req.body);
			let user = User.create(req.body, function (err, user) {
				if (err) {
					return res.json(500, {
						message: "Internal Server Error",
					});
				}

				// let userr = User.findOne({ email: req.body.email });

				return res.json(200, {
					message: "Sign Up Successful, here is your token, plz keep it safe",

					data: {
						//user.JSON() part gets encrypted

						token: jwt.sign(user.toJSON(), "caloriesapp", {
							expiresIn: "10 days",
						}),
						user,
					},
					success: true,
				});
			});
		} else {
			return res.json(500, {
				message: "Internal Server Error",
			});
		}
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};

module.exports.editProfile = async function (req, res) {
	if (req.body.password == req.body.confirm_password) {
		try {
			let user = await User.findById(req.body.id);

			user.name = req.body.name;
			user.password = req.body.password;

			user.save();

			return res.json(200, {
				message: "User is updated Successfully",

				data: {
					//user.JSON() part gets encrypted

					// token: jwt.sign(user.toJSON(), env.jwt_secret, {
					//   expiresIn: "100000",
					// }),
					user,
				},
				success: true,
			});
		} catch (err) {
			console.log(err);

			return res.json(500, {
				message: "Internal Server Error",
			});
		}
	} else {
		return res.json(422, {
			message: "Passwords donot match",
		});
	}
};

module.exports.editItem = async function (req, res) {
	try {
		let inventory = await Inventory.findOne({ itemname: req.body.itemname });
		console.log("inventory");
		inventory.quantity = req.body.quantity;

		inventory.save();

		let inventories = await Inventory.find({}).sort("-createdAt");

		return res.json(200, {
			message: "User is updated Successfully",

			data: {
				//user.JSON() part gets encrypted

				// token: jwt.sign(user.toJSON(), env.jwt_secret, {
				//   expiresIn: "100000",
				// }),
				inventories,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};

module.exports.searchUser = async function (req, res) {
	try {
		var regex = new RegExp(req.params.name, "i");

		let users = await Job.find({ name: regex });

		return res.json(200, {
			message: "The list of Searched Users",

			data: {
				//user.JSON() part gets encrypted

				//token: jwt.sign(user.toJSON(), env.jwt_secret, { expiresIn: "100000" }),
				users: users,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};

module.exports.getHistory = async function (req, res) {
	try {
		let history = await History.findOne({
			user: req.query.id,
			date: req.query.date,
		});

		return res.json(200, {
			message: "The User Profile",

			data: {
				//user.JSON() part gets encrypted

				// token: jwt.sign(user.toJSON(), env.jwt_secret, { expiresIn: "100000" }),
				history: history,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};

module.exports.createJob = async function (req, res) {
	// let inventory = await Inventory.findOne({ itemname: req.body.itemname });
	console.log(req.userData);
	try {
		let job = await Inventory.create({
			itemname: req.body.itemname,
			restid: req.userData.userId,
			quantity: req.body.quantity,
			costperitem: req.body.costperitem,
			datebought: req.body.datebought,
			dateexpired: req.body.dateexpired,
		});

		return res.json(200, {
			data: {
				job: job,
				// token: jwt.sign(user.toJSON(), env.jwt_secret, { expiresIn: "100000" })
			},
			message: "Job Created!!",
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "NOT CREATED",
		});
	}
};

module.exports.createMenu = async function (req, res) {
	try {
		let menu = await Menu.create({
			menuname: req.body.menuname,
			restid: req.userData.userId,
			costmenu: req.body.costmenu,
			ingredients: req.body.ingredients,
		});

		return res.json(200, {
			data: {
				menu: menu,
			},
			message: "Menu Created!!",
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "NOT CREATED",
		});
	}
};

module.exports.index = async function (req, res) {
	let jobs = await Inventory.find({ restid: req.userData.userId }).sort(
		"-createdAt"
	);
	console.log("jobs");
	//Whenever we want to send back JSON data

	return res.json(200, {
		message: "List of jobs",

		jobs: jobs,
	});
};

module.exports.fetchApplication = async function (req, res) {
	let application = await Application.find({}).sort("-createdAt");

	//Whenever we want to send back JSON data

	return res.json(200, {
		message: "List of Applications",

		application: application,
	});
};

module.exports.fetchMenu = async function (req, res) {
	let menu = await Menu.find({ restid: req.userData.userId }).sort(
		"-createdAt"
	);

	//Whenever we want to send back JSON data
	console.log("fetchMenu");
	// console.log(menu);
	return res.json(200, {
		message: "List of Menus",

		menu: menu,
	});
};

module.exports.createApplication = async function (req, res) {
	// let user = await User.findOne({ _id: req.body.id });
	check = req.body.skills;

	try {
		let application = await Application.create({
			// applicantemail: req.body.applicantemail,
			applicantid: req.body.applicantId,
			applicantname: req.body.applicantname,
			address: req.body.address,
			phonenumber: req.body.phonenumber,
			hours: req.body.hours,
			dob: req.body.dob,
			gender: req.body.gender,
			skills: check.split(","),
			jobname: req.body.jobname,
			jobid: req.body.jobId,
			manageremail: req.body.managerId,
		});

		return res.json(200, {
			data: {
				application: application,
				//token: jwt.sign(user.toJSON(), env.jwt_secret, { expiresIn: "100000" })
			},
			message: "Job Created!!",
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "NOT CREATED",
		});
	}
};

module.exports.acceptApplication = async function (req, res) {
	try {
		let application = await Application.findById(req.body.applicationId);

		application.status = "1";

		application.save();

		return res.json(200, {
			message: "Application is updated Successfully",

			data: {
				//user.JSON() part gets encrypted

				// token: jwt.sign(user.toJSON(), env.jwt_secret, {
				//   expiresIn: "100000",
				// }),
				application,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};

module.exports.rejectApplication = async function (req, res) {
	try {
		let application = await Application.findById(req.body.applicationId);

		application.status = "2";

		application.save();

		return res.json(200, {
			message: "Application is updated Successfully",

			data: {
				//user.JSON() part gets encrypted

				// token: jwt.sign(user.toJSON(), env.jwt_secret, {
				//   expiresIn: "100000",
				// }),
				application,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};

module.exports.closeJob = async function (req, res) {
	try {
		let job = await Job.findById(req.body.jobId);

		job.status = "1";

		job.save();

		return res.json(200, {
			message: "Job is updated Successfully",

			data: {
				//user.JSON() part gets encrypted

				// token: jwt.sign(user.toJSON(), env.jwt_secret, {
				//   expiresIn: "100000",
				// }),
				job,
			},
			success: true,
		});
	} catch (err) {
		console.log(err);

		return res.json(500, {
			message: "Internal Server Error",
		});
	}
};
