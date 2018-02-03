// const MongoClient = require('mongodb').MongoClient;
// ES6 Object Destructuring
const {MongoClient, ObjectID} = require('mongodb');

// Create a separate id object
var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/Users', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  var db = client.db('Users');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Daniel',
    age: 20,
    location: 'Long Beach'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert todo', err);
    }
    //console.log(result.ops[0]._id);
    console.log(result.ops[0]._id.getTimestamp());

  });

  client.close();

});
