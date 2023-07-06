import express, { Application } from "express";
import { handleErrors } from "./errors";
import "express-async-errors";
import { usersRoutes } from "./routes";
import { loginRoutes } from "./routes/login.routers";
import { categoryRoutes } from "./routes/categories.routers";
import { realEstateRoutes } from "./routes/realEstate.routers";
import { schedulesRoutes } from "./routes/schedules.routers";

const app: Application = express();
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoryRoutes);
app.use("/realEstate", realEstateRoutes);
app.use("/schedules", schedulesRoutes);
app.use(handleErrors);

export default app;
