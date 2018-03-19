const express = require('express');
const posts = express.Router();
const shortid = require('shortid');
const Post = require('./models/posts');

posts.route('/post/:id')
    .get((req, res) => {
        Post.findOne({ shortid: req.params.id }, (err, post) => {
            if (err)
                res.send(err);

            res.json(post);
        });
    });

posts.route('/post/:id')
    .delete((req, res) => {
        Post.findOneAndRemove({ shortid: req.params.id }, (err, post) => {
            if (err)
                res.send(err);

            res.json(post);
        });
    });

posts.route('/posts')
    .get((req, res) => {
        Post.find((err, posts) => {
            if (err)
                res.send(err);

            res.json(posts);
        });
    });

posts.route('/new-post')
    .post((req, res) => {
        let date = new Date();
        const user = new Post({
            shortid: shortid.generate(),
            author: req.body.author,
            title: req.body.title,
            cover: req.body.cover,
            category: req.body.category,
            text: req.body.content,
            date,
            timestamp: Date.now()
        });

        user.save(err => {
            if (err)
                res.status(200).json({ error: err })
            else
                res.status(200).json({ success: true })
        })
    });

module.exports = posts;
