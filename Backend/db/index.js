// import { DB_NAME } from "./constants";
// import dotenv from "dotenv";
const { DB_NAME } = require("./constants");
//Database Connect
const connectdb = (async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("ERROR in Database", error);
    });
    app.listen(app.env.PORT, () => {
      console.log(`App is listening at port${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})();
