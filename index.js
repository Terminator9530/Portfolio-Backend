/* ----------------------------------------- Import Statements -------------------------------------------------- */

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

/* ----------------------------------------- Configuration -------------------------------------------------- */

const app = express();
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}));
app.use(express.json());
dotenv.config();

const port = process.env.port;

/* ----------------------------------------- Mongo DB Connection -------------------------------------------------- */

const uri = process.env.URI;
mongoose.connect(uri,{useNewUrlParser : true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Connection Established Successfully");
});

/* ----------------------------------------- Routes -------------------------------------------------- */

const skillsRouter = require('./routes/skills.router');
app.use('/skills',skillsRouter);

const languagesRouter = require('./routes/languages.router');
app.use('/languages',languagesRouter);

const contactsRouter = require('./routes/contacts.router');
app.use('/contacts',contactsRouter);

const profileRouter = require('./routes/profile.router');
app.use('/profile',profileRouter);

const loginRouter = require('./routes/login.router');
app.use('/admin',loginRouter);

app.listen(port,function(){
    console.log(`Listening to port ${port}`);
});