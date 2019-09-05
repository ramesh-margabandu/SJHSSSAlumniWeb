const express = require('express');
const mongoose =  require('mongoose');
var cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

//const db = mongoose.connect('mongodb://localhost/SJHSSAlumniDB');
mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true }, (err, db) =>
{
  if(err)
  {
    console.log('Error connecting DB');
    console.error.bind(console, 'DB connection error');
  }
  else
  {
    console.log('Connected to DB');
    app.listen(port, ()=> 
    {
      console.log('App is running');
    });
  }
});

const appRoute = express.Router();
const event = require('./models/EventModel');
const news = require('./models/NewsModel');

appRoute.route('/events')
    .get((req, res) => {
          event.find().sort({date:-1}).exec((err, events) =>{ 
              if(err)
              {
                return res.send(err);
              }
              return res.json(events);
          });

    });

    appRoute.route('/events/upcoming')
    .get((req, res) => {
      console.log(new Date().toISOString().slice(0,10));
          event.find({date:{$gte: new Date().toISOString().slice(0,10)}}).sort({date:1}).exec((err, events) =>{ 
              if(err)
              {
                return res.send(err);
              }
              return res.json(events);
          });

    });

    appRoute.route('/events/:eventId')
    .get((req, res) => {
          event.find({_id:req.param('eventId')}, (err, events) =>{ 
              if(err)
              {
                return res.send(err);
              }
              return res.json(events);
          });

    });

    appRoute.route('/news')
    .get((req, res) => {
          news.find((err, newsList) =>{ 
              if(err)
              {
                return res.send(err);
              }
              
              return res.json(newsList);
          });

    });

app.get('/', (req, res)=> {
    res.json({'field':'Welcome to API1'});
});

app.get('/test', (req, res)=> {
    res.send('Welcome to REST API!');
});

app.use('/api', appRoute);

