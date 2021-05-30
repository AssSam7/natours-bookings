const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    // eslint-disable-next-line prettier/prettier
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful :)"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
