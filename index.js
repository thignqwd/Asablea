const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const asambleaRoute = require('./routes/asambleaRoute');
const asambleaRealizadaRoute = require('./routes/asambleaRealizadaRoute');
const personaRoute = require('./routes/personaRoute');
const comentarioRoute = require('./routes/comentarioRoute');

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', asambleaRoute);
app.use('/api', asambleaRealizadaRoute);
app.use('/api', personaRoute);
app.use('/api', comentarioRoute);

app.listen(process.env.PORT, () => {
    console.log('El proyecto esta corriendo en el puerto -> ', process.env.PORT)
});

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (err) => {
    if (err) {
        return console.log('Error al conectar con la base de datos -> ', err)
    }
    return console.log('Conectado a la base de datos')
});