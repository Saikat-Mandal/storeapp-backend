const app = require("./app");
require("dotenv").config();
app.listen(process.env.PORT, () => console.log("listning to port 3000"));
