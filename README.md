# React-Redux-Boilerplate-Blog

To launch the app, check first `.env.example` file. Insert your data Mongodb credentials and then change the name from `.env.example` => `.env`.
Then you can install the package dependecies with:

```
yarn install [or] npm install
```

Wait for all the dependencies to be installed and the you can start backend:

```
yarn back [or] npm run back
```

and then your frontend (in development mode):

```
yarn front:dev [or] npm run front:dev
```

If you want to see the production bundle, run:

```
yarn front:prod [or] npm run front:prod
```

## Project Structure

`/back` and `/front` are located inside the `/src` folder with one common `package.json`.

### Frontend Structure

```
+ /front
  + /_helpers
    - callApi.js // custom middleware to simplify async calls
  + /actions
    - posts.js // actions related to posting activity
    - users.js // actions related to user login and signup activity
  + /components
    + /forms
      - BlogCompose.js // Setting of the form inside BlogCompose.js View
      - Signup.js // Setting of the form inside Signup.js View
    + /helmets
      - BlogCompose.js // Static Helmet module for BlogCompose.js component
      - BlogIndex.js // Static Helmet module for BlogIndex.js component
      - BlogPost.js // Dynamic Helmet module for BlogPost.js component
      - SignUp.js // Static Helmet module for SignUp.js component
    + /routes
      - public.js // navigation elements configurator
    + /validators
      - BlogNewPost.js // Validators and error messages for Redux Form in BlogCompose.js
      - SignUp.js // Validators and error messages for Redux form in Signup.js
    - BlogCompose.js // Insert a New Post component => smart component
    - BlogIndex.js // Main Blog Index => smart component
    - BlogIndexPost.js // Component included as single blog post on main index => dumb component
    - BlogPost.js // Single post renderer => smart component
    - Navigator.js // Page header and navigator => smart component
    - NavigatorLink.js // Single route / link of our navigation => dumb component
    - SignUp.js // Signup Form with async Form verification => smart component
  + /reducers
    - index.js // root reducer where all other reducers are located
    - posts.js // reducer that elaborate the actions related to the posts
    - routing.js // component that take track of the history and prevent loose of navigation on a page refresh
    - users.js // reducer to handle actions related to Login and Signup
- index.js // where we define store and router

```

I've followed this **naming formality** for the components:

```
   Blog     Index       .js
[subject][hierarchy][extension]
   Blog     Index        Post        .js
[subject][hierarchy][Subcomponent][extension]
```

That way all the three is not over-nested and all the elements are easy to find. At will every big component can be located in a subfolder and follow the same convention.

All the connection to the state are actually located inside the components cause they are very small, either way a subfolder of `front`, ideally called `/containers` can host the `smart components / containers`.

### Backend Structure

At the moment the backend is only a main `server.js`, and a mongoose model to handle posts into a MongoDB.

```
+ /back
  + /api
    + /models
      - posts.js // Mongoose Schema for posts
      - users.js // Mongoose Schema for users
    - index.js // main entry point of all the routes
    - posts.js // routes for posts /api/post(s)/:id?
    - users.js // routes for posts /api/user(s)/:id?
  - server.js // Entry point of our server

```

## Tasks
- [x] Frontend routing w/ routing middlewares;
- [x] Promises w/ redux-promises middleware;
- [x] Redux Form w/ error handling;
- [x] Added basic dates;
- [x] Added a css keyframe animation fadeIn on component render;
- [x] Added Helmets for page titles and descriptions config;
- [x] Improve the Blog post insertion (insert date, timestamp);
- [x] Signup improved with async validation and email checking;
- [x] Added bcryptjs to encrypt any password users choose;
- [ ] Add Local Storage enanchers;
- [ ] Improve the Blog post insertion (list of categories);
- [ ] Write frontend tests with Jest;
- [ ] Create an actual login in Node (possibly without using passport);
- [ ] Experiment the possibility to use GraphQL with MongoDB;
- [ ] Give the change to manage blog posts from Slack;
- [ ] Secure the api endpoints with JWT;
- [ ] Extend Webpack confing to work in development and production optimally;
- [ ] Turn it into a Progressiwe Web App usable as actual Mobile app;
