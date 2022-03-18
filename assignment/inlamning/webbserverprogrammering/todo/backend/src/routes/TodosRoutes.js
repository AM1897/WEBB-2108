import TodosController from "../controller/TodosController.js"

const routes = (app) => {
    app.post('/user', TodosController.creatUser)

    app.get('/users', TodosController.allNames)
    app.get('/users/name', TodosController.justNames)
    app.get('/user/:name', TodosController.justName)


    app.put('/user/', TodosController.updateTodoByName)
    app.put('/isdone/:id', TodosController.trueOrFalse)

    app.delete('/user/:name', TodosController.deleteTodoByName)
}

export default {
    routes
}