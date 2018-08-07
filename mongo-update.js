// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err) {
    return console.log('unable to connect');
  }
  console.log('Connected');
db.collection('Todos').findOneAndUpdate({
  _id: new ObjectId('5b6964fbd2771e08e358e25c')
},{
  $set: {
    completed: false
  }
  },{
    returnOriginal: false

}).then((result)=>{
  console.log(result);
});
});
