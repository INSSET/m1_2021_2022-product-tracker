const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Auth API',
    description: 'This is the swagger for the authentification api',
  },
  host: 'localhost:4001',
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js'); // Your project's root file
  });