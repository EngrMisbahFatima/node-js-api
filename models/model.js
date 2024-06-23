const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
	title : {
		type: String,
		required: 'Title is required',
		minLength: 4,
		maxLength: 14,
	},
	body : {
		type: String,
		required: 'Body is required',
		minLength: 4,
		maxLength: 1400,
	}
});


module.exports = mongoose.model("Post", postSchema);