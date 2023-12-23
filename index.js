const express = require("express");
const cors = require("cors");
const router = require("./Routes/userRoutes");
const palmRouter = require("./Routes/palmRoutes");
const tipsRouter = require("./Routes/tipsRoutes");
const app = express();

const PORT = parseInt(process.env.PORT) || 8080;

app.use(express.json());
app.use(cors());

app.use("/api/users", router);
app.use("/api", palmRouter);
app.use("/api", tipsRouter);

app.listen(PORT, () => {
  console.log(`Server is Listening at the the port ${PORT}`);
});
