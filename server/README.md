## NODE CRUD DEMO App

CRUD application built using NodeJS, React, MongoDB and Express

Create an .env add add the following:

PORT=42373
<<<<<<< HEAD
DATABASE="ADD_YOUR_DB_URL"
TOKEN_SECRET="mysecrettoken"

Then run `npm install` and `node app.js`
=======
DATABASE="mongodb+srv://JamesAlbert:kc3WF9q2nAs9oxVg@cluster0.zslgako.mongodb.net/?retryWrites=true&w=majority"
TOKEN_SECRET="destinations"
kc3WF9q2nAs9oxVg
JamesAlbert


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://JamesAlbert:kc3WF9q2nAs9oxVg@cluster0.zslgako.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
>>>>>>> e30f063 (test)
