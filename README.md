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

## Tasks
- [x] Frontend routing w/ routing middlewares;
- [x] Promises w/ redux-promises middleware;
- [x] Redux Form w/ error handling;
- [ ] Write frontend tests with Jest;
- [ ] Create an actual login in Node (possibly without using passport);
- [ ] Give the change to manage blog posts from Slack;
- [ ] Secure the api endpoints with JWT;
- [ ] Extend Webpack confing to work in development and production optimally;
- [ ] Turn it into a Progressiwe Web App usable as actual Mobile app;
