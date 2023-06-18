// app.js

const express = require('express');

const { loginRouter, userRouter, categoryRouter, postRouter } = require('./routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

app.get('/ping', (_request, response) => {
  response.send('pong');
});

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
