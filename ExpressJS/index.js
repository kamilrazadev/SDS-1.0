const exxpress = require("express");
const app = exxpress();
require("dotenv").config();
const cors = require("cors");

const port = process.env.SERVER_PORT;

app.use(cors());
app.use(exxpress.json());
app.use("/api", require("./api/user/Router"));

app.listen(port, () => {
  console.log("App listning on port", port);
});
