const Post = require('../models/model')

exports.getPosts = (req, res) => {
	res.json({
		posts : [{title: 'Post 1'}, {title: 'Post 2'}]
	})
};

exports.createPost = (req, res) => {
	const post = new Post(req.body);
	post.save().then((err, result) => {
		if(err){
			return res.status(400).json({
				error: err
			});
		}
		 res.status(200).json({
				post: result
			});
	});
};
