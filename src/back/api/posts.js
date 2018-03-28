const express = require('express');
const posts = express.Router();
const shortid = require('shortid');
const Post = require('./models/posts');


posts.get('/', (req, res) => {
        Post.find((err, posts) => {
            if (err)
                res.status(400).send(err);

            res.status(200).json(posts);
        });
    });

posts.get('/:id', (req, res) => {
        Post.findOne({ shortid: req.params.id }, (err, post) => {
            if (err)
                res.status(400).send(err);

            res.status(200).json(post);
        });
    });

posts.delete('/:id', (req, res) => {
        Post.findOneAndRemove({ shortid: req.params.id }, (err, post) => {
            if (err)
                res.status(400).send(err);

            res.status(200).json(post);
        });
    });

posts.post('/new-post', (req, res) => {
        let date = new Date();
        const post = new Post({
            shortid: shortid.generate(),
            author: req.body.author,
            title: req.body.title,
            cover: req.body.cover,
            category: req.body.category,
            text: req.body.content,
            date,
            timestamp: Date.now()
        });

        post.save(err => {
            if (err)
                res.status(400).json({ error: err })
            else
                res.status(200).json({ success: true })
        })
    });

module.exports = posts;
