// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db = null;

async function getDB() {
  if (!db) {
    await client.connect();
    db = client.db('userdb');
  }
  return db;
}

module.exports = { getDB, client };
