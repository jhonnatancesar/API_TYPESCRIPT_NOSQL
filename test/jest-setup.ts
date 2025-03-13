import { SetupServer } from '../src/server';
import supertest from 'supertest';

//Rodara antes de todos os teste da aplicação, ele ira inicializar o server em modo teste
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
