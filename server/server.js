const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const postsRouter = require('./routes/postsRouter');
const userRouter = require('./routes/userRouter');
const companyRouter = require('./routes/companyRouter');
const coursesRouter = require('./routes/coursesRouter');
const findCockieRouter = require('./routes/findCockieRouter');
const profileRouter = require('./routes/profileRouter');
const questionRouter = require('./routes/questionRouter');
const personEditRouter = require('./routes/personEditRouter');

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
  }),
);

// Serve uploaded PDF files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.static('public'));

// app.use('/public', express.static(path.join(__dirname, 'public')));

// app.use('/api/posts', postsRouter);
app.use('/api/user', userRouter);
app.use('/api', findCockieRouter);
app.use('/api/profile', profileRouter);
app.use('/api/profile', personEditRouter);
app.use('/api/company', companyRouter);
app.use('/api/company', coursesRouter);
app.use('/api/company', questionRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
