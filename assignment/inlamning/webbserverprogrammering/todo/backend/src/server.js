import express from "express";
import Configuration from './configurations/configuration.js'
import ApplyMiddlewares from "./configurations/ApplyMiddlewares.js";
import AliveRoutes from "./routes/AliveRoutes.js";
import TodosRoutes from "./routes/TodosRoutes.js";

const app = express()
ApplyMiddlewares(app)

AliveRoutes.routes(app)
TodosRoutes.routes(app)

Configuration.connectToPort(app)

export default app