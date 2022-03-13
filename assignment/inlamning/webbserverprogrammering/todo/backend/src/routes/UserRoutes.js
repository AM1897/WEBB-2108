import UserController from '../controller/UserController.js'

const routes = (app) => {
    app.post('/user', UserController.creatUser)
    app.get('/users', UserController.allNames)
    app.get('/users/name', UserController.justNames)
    app.get('/user/:name', UserController.justName)


    app.put('/user/', UserController.updateUserByName)

    app.delete('/user/:name', UserController.deleteUserByName)
}

export default {
    routes
}