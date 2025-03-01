const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require('./routes/auth'); // Import auth routes

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes); // Use auth routes

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
