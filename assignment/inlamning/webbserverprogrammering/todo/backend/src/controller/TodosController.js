import todosDatabase from '../data/TodosDatabase.js'


const creatUser = (req, res) => {
    const { name, age, todo } = req.body
    const newObject = {
        id: todosDatabase.length,
        name: name,
        age: age,
        todo: todo,
        taskIsDone: false
    }
    todosDatabase.push(newObject)
    res.status(201).send(todosDatabase)
}

const allNames = (req, res) => {
    res.status(200).send(todosDatabase)
}

const todoNames = () => {
    const names = []
    todosDatabase.forEach(todos => {
        names.push({
            name: todos.name
        })
    })
    return names
}

const justNames = (req, res) => {
    const responseFromDb = todoNames()
    res.status(200).send(responseFromDb)
}

const searchTodoByName = (name) => {
    let object = `Jag hittar inte "${ name }"i data basen`
    todosDatabase.forEach(todos => {
        if (name === todos.name) {
            object = todos
            return todos
        }
    })
    return object
}

const justName = (req, res) => {
    const name = req.params.name
    const responseFromDb = searchTodoByName(name)
    res.status(200).send(responseFromDb)
}

const modifyTodoByName = (name, newName, age, todo) => {
    let object = `Jag hittar inte "${ name }"i data basen`
    todosDatabase.forEach(todos => {
        if (name === todos.name) {
            todos.name = newName
            todos.age = age
            todos.todo = todo
            object = todos
            return todos
        }
    })
    return object
}

const updateTodoByName = (req, res) => {
    const {name, newName, age, todo} = req.body
    const response = modifyTodoByName(name, newName, age, todo)
    res.status(202).send(response)
}

const removeTodoByName = (name) => {
    let text = `Namnet :"${name}"`

    for (let i = 0; i < todosDatabase.length; i++) {
        if (name === todosDatabase[i].name) {
            text += `Den är bortagen från data basen!`
            todosDatabase.splice(i, 1)
            return text
        }
    }
    text += `finns inte i databasen!`
    return text
}

const deleteTodoByName = (req, res) => {
    const name = req.params.name
    const responseFromDb = removeTodoByName(name)
    res.status(200).send(responseFromDb)
}

const trueOrFalse = (req, res) => {
    const id = Number(req.params.id)
    todosDatabase[id].taskIsDone = !todosDatabase[id].taskIsDone
    res.status(202).send(todosDatabase[id])
}

export default {
    creatUser,
    allNames,
    justNames,
    justName,
    updateTodoByName,
    deleteTodoByName,
    trueOrFalse
}