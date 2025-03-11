/* eslint-env node */
/* eslint-disable no-undef */
const functions = require("firebase-functions");

const helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});

module.exports = { helloWorld };
