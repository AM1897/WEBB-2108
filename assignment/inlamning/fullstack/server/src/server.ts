import express from 'express'
import Configuration from './configurations/Configurations'
import Middleware from './middlewares/Middleware'
import AliveRoutes from './routes/AliveRoutes'
import UserRoutes from './routes/UserRoutes'
import Logger from './utils/Logger'

const server = express()
Middleware.applyMiddlewares(server)


AliveRoutes(server)
UserRoutes(server)

Middleware.errorHandlerAndNotFound(server)

Configuration.connectToPort(server)
Configuration.connectToDatabase().then(() => {
    Logger.debug('HMMMMMM')
})

export default server