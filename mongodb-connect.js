// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
    return console.log('unable to connect');
  }
  console.log('Connected');

// db.collection('Todos').insertOne({
//   text: 'Something',
//   completed: false
// }, (err,result)=>{
//   if (err){
//     console.log('Unable',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2));
// });

  db.close();
});
