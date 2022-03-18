import http from '../MyAPI'

const getAllTodos = () => {
    return http.get('/users')
}

const createTodos = (newUser) => {
    return http.post('/user', newUser)
}

const updateTodos = (changedUser) => {
    return http.put('/user', changedUser)
}

const deleteTodos = (name) => {
    return http.delete(`/user/${name}`)
}

const getSingleTodosByName = (name) => {
    return http.get(`/user/${name}`)
}

const trueOrFalse = (id) => {
    return http.put(`/isdone/${id}`)
}

export default {
    getAllTodos,
    createTodos,
    updateTodos,
    deleteTodos,
    getSingleTodosByName,
    trueOrFalse
}