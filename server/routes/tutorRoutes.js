const express = require("express")
const database = require("../connect")
const ObjectId = require("mongodb").ObjectId

let tutorRoutes = express.Router();

tutorRoutes.route("/tutors").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("Tutors").find({}).toArray()
  if(data.length>0)
  {
    response.json(data)
  }
  else{
    throw new Error("Data was not found")
  }
});

tutorRoutes.route("/tutors/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("Tutors").findOne({_id: new ObjectId(request.params.id)})
  if(Object.keys(data).length>0)
  {
    response.json(data)
  }
  else{
    throw new Error("Data was not found")
  }
});

tutorRoutes.route("/tutors").post(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    name:request.body.name,
    password:request.body.password,
    email:request.body.email,
    courses:request.params.courses,
    bio:request.params.bio,
  }
  let data = await db.collection("Tutors").insertOne(mongoObject)
  response.json(data)
});

tutorRoutes.route("/tutors/:id").put(async (request, response) => {
  let db = database.getDb();
  let mongoObject = {
    $set: {
      name:request.body.name,
      password:request.body.password,
      email:request.body.email,
      courses:request.params.courses,
      bio:request.params.bio,
    }
  }
  let data = await db.collection("Tutors").updateOne({_id: new ObjectId(request.params.id)}, mongoObject)
  response.json(data)
});

tutorRoutes.route("/tutors/:id").delete(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("Tutors").deleteOne({_id: new ObjectId(request.params.id)})
  response.json(data)
});

module.exports = tutorRoutes