import userDatabase from '../data/userDatabase.js'

const creatUser = (req, res) => {
    const { name, age, todo} = req.body
    const newObject = {
        name: name,
        age: age,
        todo: todo,
        id: userDatabase.length
    }
    userDatabase.push(newObject)
    res.status(201).send(userDatabase)
}

const allNames = (req, res) => {
    res.status(200).send(userDatabase)
}

const userNames = () => {
    const names = []
    userDatabase.forEach(user => {
        names.push({
            name: user.name
        })
    })
    return names
}

const  justNames = (req, res) => {
    const responseFromDb = userNames()
    res.status(200).send(responseFromDb)
}

const searchUserByName = (name) => {
    let object = `Jag hittar inte "${ name }"i data basen`
    userDatabase.forEach(user => {
        if (name === user.name) {
            object = user
            return user
        }
    })
    return object
}

const justName = (req, res) => {
    const name = req.params.name
    const responseFromDb = searchUserByName(name)
    res.status(200).send(responseFromDb)
}

const modifyUserByName = (name, newName, age, todo) => {
    let object = `Jag hittar inte "${ name }"i data basen`
    userDatabase.forEach(user => {
        if (name === user.name) {
            user.name =newName
            user.age = age
            user.todo = todo
            object = user
            return user
        }
    })
    return object
}

const updateUserByName = (req, res) => {
    const {name, newName, age, todo} = req.body
    const response = modifyUserByName(name, newName, age, todo)
    res.status(202).send(response)
}

const removeUserByName = (name) => {
    let text = `Namnet :"${name}"`

    for (let i = 0; i <userDatabase.length ; i++) {
        if (name === userDatabase[i].name) {
            text += `Den är bortagen från data basen!`
            userDatabase.splice(i, 1)
            return text
        }
    }
    text += `finns inte i databasen!`
    return  text
}

const deleteUserByName = (req, res) => {
    const name = req.params.name
    const responseFromDb = removeUserByName(name)
    res.status(200).send(responseFromDb)
}

export default {
    creatUser,
    allNames,
    justNames,
    justName,
    updateUserByName,
    deleteUserByName
}







