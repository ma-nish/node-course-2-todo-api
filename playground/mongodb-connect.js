// const MongoClient = require('mongodb').MongoClient;

// const {MongoClient, objectID} = require('mongodb');
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDb Server');
//   }
//   console.log('Connected to MongoDb Server');
//   const db = client.db('TodoApp');
//
//   // db.collection('Todos').insertOne({
//   //   text: 'Something to do',
//   //   completed: false
//   // }, (err, result) => {
//   //   if (err) {
//   //     return console.log('Unable to insert todo', err);
//   //   }
//   //
//   //   console.log(JSON.stringify(result.ops, undefined, 2));
//   // });
//   //
//   // client.close();
//
//   db.collection('Users').insertOne({
//     name: 'Andrew',
//     age: 23,
//     location: 'noida'
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert Users data', err);
//     }
//     console.log(result.ops[0]._id.getTimestamp());
//   });
//   client.close();
// });


const {MongoClient, objectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  db.collection('Users').insertOne({
    name: 'Andrew',
    age: 23,
    language: 'JavaScript'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Users data', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});
