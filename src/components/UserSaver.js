// saveUser.js
const { getDB, client } = require('./db');

async function saveUserDetails(username, password) {
  try {
    const db = await getDB();
    const users = db.collection('users');

    const result = await users.insertOne({ username, password });
    console.log('User saved with ID:', result.insertedId);
  } catch (err) {
    console.error('Error saving user:', err);
  } finally {
    await client.close(); // Optional: close only if you're not doing multiple operations
  }
}

