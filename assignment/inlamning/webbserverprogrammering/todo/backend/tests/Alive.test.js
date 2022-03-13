import Chai from 'chai'
import ChaiHTTP from 'chai-http'
import { describe, it } from 'mocha'
import app from "../src/server.js";
import {response} from "express";

Chai.should()
Chai.use(ChaiHTTP)

const expect = Chai.expect

const testApi = () => {
    describe('test Api Alive!', () => {
        it('Jag vill få tillbaks 200 är OK', (done => {
            Chai.request(app)
                .get('/')
                .end((request, response) =>{
                    expect(response.status).to.equal(200)
                    expect(response.text).to.equal('API is Alive!')
                    done()
                })
        }))
    })
}

describe('Testing Api Alive', () => {
    testApi()
})