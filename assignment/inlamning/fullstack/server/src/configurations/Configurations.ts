import dotenv from 'dotenv'
import {Express} from 'express'
import {connect} from 'mongoose'
import Logger from '../utils/Logger'

dotenv.config()

const PORT: number = Number(process.env.SERVER_PORT) || 3001
const env: string = process.env.NODE_ENV || 'production'

let uri: string

if (env === 'development') {
    uri = process.env.MONGODB_URL + process.env.MONGODB_DB_NAME
} else {
    uri = process.env.MONGODB_URI
}

const connectToDatabase = async () => {
    try {
        await connect(uri)
        Logger.info('Anslutningen till din databas är utmärkt')
    } catch (error) {
        Logger.error('Fel vid anslutning till databasen'.toUpperCase(), error)
        process.exit()
    }
}

const connectToPort = (server: Express) => {
    server.listen(PORT, () => {
        Logger.info(`[server]: Server körs på http://localhost:${PORT}`)
        if (env === 'development') {
            Logger.warn('Server körs i utvecklingsläge!'.toUpperCase())
        }
    })
}

export default {
    connectToDatabase,
    connectToPort
}