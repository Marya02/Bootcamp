const express = require('express');
const cors = require ('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose')
const app = express();

const mongoUri = 'mongodb+srv://root:root@cluster0-xnc4l.mongodb.net/test?retryWrites=true&w=majority';
const connection = () =>
  mongoose.connect(mongoUri, {
    useNewUrlParser:true,
    useCreateIndex:true,
  })
    .then(() => console.log ('DB Connected:'))
    .catch(() => console.log('Failed to connected DB!'));    

connection();
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());


const {
  usserList,
  getUsserById,
  addUser,
  editUser,
  deleteUser,
} = require('./modules/usser');

const{
  login,
}=require('./modules/auth');

app.post('/login',login);
app.get('/usser',usserList);
app.get('/usser/:id',getUsserById);
app.post('/usser',addUser);
app.put('/usser/:id',editUser);
app.delete('/usser/:id',deleteUser);

app.listen(7000,() => {
    console.log ('App running Up!');
});