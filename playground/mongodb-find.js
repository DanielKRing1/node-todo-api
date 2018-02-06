// const MongoClient = require('mongodb').MongoClient;
// ES6 Object Destructuring
const {MongoClient, ObjectID} = require('mongodb');

// Create a separate id object
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  var db = client.db('Users');

  // var data = db.collection('Todos').find({
  //   _id: new ObjectID("5a75b9153d65323f64b79327")
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // READ FROM DATABASE----
  var data = db.collection('Users').find({name: 'Daniel'}).toArray().then((docs) => {
      console.log('Users');
      console.log(JSON.stringify(docs, undefined, 2))  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.close();

});
