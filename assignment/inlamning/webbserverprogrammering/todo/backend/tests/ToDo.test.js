import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import {describe, it} from 'mocha'
import app from "../src/server.js";

Chai.should()
Chai.use(ChaiHTTP)

const expect = Chai.expect

const newData =     {
    name: 'Michaela',
    age: 4,
    todo: 'läser'
}

const updateUser = {
    name: "Michaela",
    newName: "Dylan",
    age: 3,
    todo: 'spelar fotboll'
}

const allNames = () => {
    describe('test all info!', () => {
        it('förvänta mig att få tillbaka en array!', (done) => {
            Chai.request(app)
                .get('/users')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(4)
                    expect(body.length).to.not.equal(3)
                    expect(body.length).to.not.equal(5)

                    const user = body[0]
                    expect(user).to.be.an('object')
                    expect(user.name).to.equal('Christoffer')
                    expect(user.age).to.equal(30)
                    expect(user.todo).to.equal('salsa')
                    done()
                })
        })
    })
}

const justNames = () => {
    describe('Testing to get an array of names (GET)', () => {
        it('should expect an array of names to be returned', (done) => {
            Chai.request(app)
                .get('/users/name')
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('array')
                    expect(body.length).to.equal(4)
                    expect(body.length).to.not.equal(3)
                    expect(body.length).to.not.equal(5)

                    let user = body[0]
                    expect(user).to.be.an('object')
                    expect(user.name).to.equal('Christoffer')

                    user = body[1]
                    expect(user.name).to.equal('Bengtina')
                    done()
                })
        })
    })
}

const justName = () => {
    const name = 'Christoffer'
    describe('Testing to get data by name (GET)', () => {
        it('should expect an object to be returned', (done) => {
            Chai.request(app)
                .get(`/user/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal('Christoffer')
                    expect(body.age).to.equal(30)
                    expect(body.todo).to.equal('salsa')
                    done()
                })
        })
    })
}

const ifTheNameDoesNotExist = (name) => {
    describe('Test that get correct response with non existing name (GET)', () => {
        it('should get a response that says name dont exist', (done) => {
            Chai.request(app)
                .get(`/user/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Jag hittar inte "${name}"i data basen`)
                    done()
                })
        })
    })
}


const creatUser = () => {
    describe('Testing to create new data (POST)', () => {
        it('should expect new data to be created', (done) => {
            Chai.request(app)
                .post('/user')
                .send(newData)
                .end((error, response) => {
                    expect(response.status).to.equal(201)

                    const body = response.body[4]
                    expect(body.name).to.equal(newData.name)
                    expect(body.age).to.equal(newData.age)
                    expect(body.todo).to.equal(newData.todo)
                    done()
                })
        })
    })
}

const checkIfTheNameExists = (name) => {
    describe('Testing to check that created data exist', () => {
        it('should expect an object with data to be returned', (done) => {
            Chai.request(app)
                .get(`/user/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)

                    const body = response.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(newData.name)
                    expect(body.age).to.equal(newData.age)
                    expect(body.todo).to.equal(newData.todo)
                    done()
                })
        })
    })
}

const updateUserByName = () => {
    describe('Testing to update data by name (PUT)', () => {
        it('should get object with updated data', (done) => {
            Chai.request(app)
                .put('/user/')
                .send(updateUser)
                .end((error, respond) => {
                    expect(respond.status).to.equal(202)

                    const body = respond.body
                    expect(body).to.be.an('object')
                    expect(body.name).to.equal(updateUser.newName)
                    expect(body.age).to.equal(updateUser.age)
                    expect(body.todo).to.equal(updateUser.todo)
                    done()
                })
        })
    })
}


const deleteUserByName = (name) => {
    describe('Testing to delete updated data (DELETE)', () => {
        it('should get a response that name was deleted from database', (done) => {
            Chai.request(app)
                .delete(`/user/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Namnet :"${name}"Den är bortagen från data basen!`)
                    done()
                })
        })
    })
}

const deleteDataThatDoesNotExist = (name) => {
    describe('Testing to delete updated data (DELETE)', () => {
        it('should get a response that name dont exist in database', (done) => {
            Chai.request(app)
                .delete(`/user/${name}`)
                .end((error, response) => {
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal(`Namnet :"${name}"finns inte i databasen!`)
                    done()
                })
        })
    })
}





describe('testing date routes', () => {
    allNames()
    justNames()
    justName()
    ifTheNameDoesNotExist(newData.name)
    creatUser()
    checkIfTheNameExists(newData.name)
    updateUserByName()
    deleteUserByName(updateUser.newName)
    deleteDataThatDoesNotExist(updateUser.name)
})

