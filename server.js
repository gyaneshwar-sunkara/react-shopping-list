const express = require('express');
const mongoose = require('mongoose');

const app = express();


/**
 * Static Assets
 */
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`[Server] Listening on port ${port}`));