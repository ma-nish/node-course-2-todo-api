//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDb Server');
  }
  console.log('Connected to MongoDb Server');
  const db = client.db('TodoApp');

  db.collection('Todos').find({
    _id: new ObjectID('5c6a7ed19f8e2b3e25d8cb10')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  client.close();
});
