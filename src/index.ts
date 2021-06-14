import express from "express";
import { subscribeRoutes } from "./routes/subscribe";
import { verifyRoutes } from "./routes/verify";
import { usersRoutes } from "./routes/users";

const app = express();
const port = 8080; // default port to listen

app.use(express.json());

app.use("/subscribe", subscribeRoutes);
app.use("/verify", verifyRoutes);
app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
