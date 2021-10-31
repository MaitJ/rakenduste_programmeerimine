const {PostModel} = require('../models/Post');

exports.getPost = async (req, res) => {
    const posts = await PostModel.find({});

    const newPosts = posts.map((post) => {
        return mergedPost = {
            ...post,
            name: post.firstName + post.lastName
        }
    })

    console.log(newPosts);

    res.status(200).send(posts);
};

exports.addPost = async (req, res) => {
    const {firstName, lastName, data} = req.body;
    const newPost = {
        firstName,
        lastName,
        data
    };
    const createdPost = new PostModel(newPost);
    const savedPost = await createdPost.save();
    
    if (!savedPost) throw Error("Post couldnt be saved");
    res.status(200).send(true);
};

exports.updatePost = async (req, res) => {
    const {id} = req.params;
    const {firstName, lastName, data} = req.body;

    const updatedPost = {
        firstName,
        lastName,
        data,
        updatedAt: Date.now()
    };

    const didUpdate = await PostModel.findByIdAndUpdate({_id: id}, updatedPost);

    if (!didUpdate) throw Error("Couldn't update post");
    res.status(200).send(true);
};


exports.deletePost = async (req, res) => {
    const {id} = req.params;
    const didDelete = await PostModel.findByIdAndDelete({_id: id});
    if (!didDelete) throw Error("Couldn't delete post");
    res.status(200).send(true);
}
