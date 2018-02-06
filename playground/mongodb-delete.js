const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Successfully connectd to MongoDB server');

  var db = client.db('TodoApp');

  // Delete many
  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  // Delete one
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  // });

  // Find one and delete
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
  //   console.log(JSON.stringify(result, undefined, 2));
  //   console.log(result.value.text);
  // });

  db.collection('Todos').findOneAndDelete({_id: new ObjectID("5a763a314ff34ab67e580055")}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
    try{
      console.log(result.value.text);
    } catch(e){
      console.log('.text attribute was not found');
    }
  });

  client.close();

});
