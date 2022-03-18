const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
		type: String,
		required: [true, "This is a required field."],
		minlength: [6, "The setup must be more than 6 characters long."]
	},
	punchline: {
		type: String,
		required: [true, "This is a required field."],
		minlength: [4, "The punchline must be more than 5 characters long."]
	}
}, {timestamp: true});

module.exports.Joke = mongoose.model("Joke", JokeSchema);