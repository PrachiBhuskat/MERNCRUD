import express from 'express'

import  {getUsers,addUsers,getUserById,deleteUser,editUser} from '../controller/userController.js' ;

const route = express.Router();

route.get('/',getUsers);
route.post('/add',addUsers);
route.get('/:id',getUserById);
route.put('/:id',editUser);
route.delete('/:id',deleteUser);

export default  route;