import http from '../MyAPI'

const getAllUsers = () => {
    return http.get('/users')
}

const createUser = (newUser) => {
    return http.post('/user', newUser)
}

const updateUser = (changedUser) => {
    return http.put('/user', changedUser)
}

const deleteUser = (name) => {
    return http.delete(`/user/${ name }`)
}

const getSingleDataByName = (name) => {
  return http.get(`/user/${name}`)
}

export default {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    getSingleDataByName
}