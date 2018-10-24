/*import * as chai from 'chai';

import * as chaiAsPromised from 'chai-as-promised';
import chaiHttp = require('chai-http');
import { Request, Response } from 'express';
import * as sinon from 'sinon';
import * as sinonChai from 'sinon-chai';
chai.use(chaiAsPromised);
chai.use(sinonChai);
chai.use(chaiHttp);

import {
    auth,
} from '../middleware/auth';
//import { TestHelpers } from '../TestHelpers';

const baseUrl : string = 'http://localhost:3001/';

const validCredentials : Object = {
	"email":"ganesh@gmail.com",
	 "password":"ganeshk123"
}

describe('Auth API tests', () => {
    let token: any;
    before( async () => {
        chai.use(sinonChai);
        await chai.request(baseUrl)
        .post('/signin')
        .set('content-type','application/json')
        .send(validCredentials)
        .then(resp => {
            token = resp.body.token;
        });
    });*/