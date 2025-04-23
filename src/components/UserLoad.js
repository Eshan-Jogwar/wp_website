// loadUser.js
const { getDB, client } = require('./db');

async function loadUserDetails(username) {
  try {
    const db = await getDB();
    const users = db.collection('users');

    const user = await users.findOne({ username });
    if (user) {
      console.log('User found:', user);
    } else {
      console.log('User not found.');
    }
  } catch (err) {
    console.error('Error loading user:', err);
  } finally {
    await client.close(); // Optional
  }
}
