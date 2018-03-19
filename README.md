# React-Redux-Boilerplate-Blog

To launch the app, check first `.env.example` file. Insert your data Mongodb credentials and then change the name from `.env.example` => `.env`.\n
Then you can install the package dependecies with:
<br/>
```
yarn install [or] npm install
```
<br/>
Wait for all the dependencies to be installed and the you can start backend:

```
yarn back [or] npm run back
```
<br/>
and then your frontend (in development mode):
<br/>
```
yarn front:dev [or] npm run front:dev
```
<br/>
If you want to see the production bundle, run:
<br/>
```
yarn front:prod [or] npm run front:prod
```
<br/>
## Project Structure

`/back` and `/front` are located inside the `/src` folder with one common `package.json`.
<br/>
### Frontend Structure

```
+ /front
  + /actions
    - index.js // collections of the actions related to the blog post
  + /components
    + /validators
      - BlogNewPostForm.js // Validators and error messages for Redux Form in BlogNewPost.js
    - BlogIndex.js // Main Blog Index => smart component
    - BlogIndexPost.js // Component included as single blog post on main index => dumb component
    - BlogNewPost.js // Insert a New Post component => smart component
    - BlogPost.js // Single post renderer => smart component
    - Navigator.js // Page header and navigator => smart component
    - NavigatorLink.js // Single route / link of our navigation => dumb component
  + /reducers
    - index.js // root reducer where all other reducers are located
    - posts.js // reducer that elaborate the actions related to the posts
    - routing.js // component that take track of the history and prevent loose of navigation on a page refresh
- index.js // where we define store and router

```
<br/>
I've followed this **naming formality** for the components:
<br/>
```
   Blog     Index       .js
[subject][hierarchy][extension]
   Blog     Index        Post        .js
[subject][hierarchy][Subcomponent][extension]
```
<br/>
That way all the three is not over-nested and all the elements are easy to find. At will every big component can be located in a subfolder and follow the same convention.
<br/>
All the connection to the state are actually located inside the components cause they are very small, either way a subfolder of `front`, ideally called `/containers` can host the **smart components / containers**.
<br/>
### Backend Structure

At the moment the backend is only a main `server.js`, and a mongoose model to handle posts into a MongoDB.
<br/>
```
+ /back
  + /api
    + /models
      - posts.js // Mongoose Schema fro posts
    - posts.js // Where are specified all the routes for posts /api/post(s)/:id?
  - server.js // Entry point of our server

```
<br/>
## Tasks
- [x] Frontend routing w/ routing middlewares;
- [x] Promises w/ redux-promises middleware;
- [x] Redux Form w/ error handling;
- [ ] Add Local Storage enanchers;
- [ ] Improve the Blog post insertion (insert date, timestamp, list of categories);
- [ ] Write frontend tests with Jest;
- [ ] Create an actual login in Node (possibly without using passport);
- [ ] Experiment the chance to use GraphQL with MongoDB;
- [ ] Give the change to manage blog posts from Slack;
- [ ] Secure the api endpoints with JWT;
- [ ] Extend Webpack confing to work in development and production optimally;
- [ ] Turn it into a Progressiwe Web App usable as actual Mobile app;
