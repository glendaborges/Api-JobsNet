const express = require('express');
const mongoose = require('mongoose');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const app = express();


mongoose.connect('mongodb+srv://user1:dev500@cluster0.qvvzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {


});


app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen(process.env.PORT| 5000, () => {
    console.log('rodando na porta 5000');
});