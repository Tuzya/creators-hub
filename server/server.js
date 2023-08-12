const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const postsRouter = require('./routes/postsRouter');
const userRouter = require('./routes/userRouter');
const companyRouter = require('./routes/companyRouter');
const coursesRouter = require('./routes/coursesRouter');
// const profileRuter = require('./routes/profileRouter');
const findCockieRouter = require('./routes/findCockieRouter');
const profileRouter = require('./routes/profileRouter');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    name: 'sid',
    secret: process.env.SESSION_SECRET ?? 'test',
    resave: true,
    store: new FileStore(),
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    },
  })
);

app.use('/api/posts', postsRouter);
app.use('/api/user', userRouter);
app.use('/api', findCockieRouter);
app.use('/api/profile', profileRouter);
app.use('/api/company', companyRouter);
app.use('/api/company', coursesRouter);
// app.use('/api/company/:id/allcourses', coursesRouter);
// app.use('/api/company/', profileRuter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
