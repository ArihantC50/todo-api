// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
    return console.log('unable to connect');
  }
  console.log('Connected');
  //deleteMany
  db.collection('Todos').deleteMany({completed:true}).then((result)=>{
    console.log(result);
  });
});
