const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3001;

const db = require("./models");

//Routers
const postRouter = require("./routes/Projects");
app.use("/projects", postRouter);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
});
