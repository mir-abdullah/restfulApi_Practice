import express from "express";
import { createUser } from "../controllers/users.js";
import {getSingleUser} from "../controllers/users.js"
import {updateUser} from "../controllers/users.js"
import { deleteUser,getAllUsers } from "../controllers/users.js";

const router = express.Router();



//route to save a single user

router.post('/',createUser)

//route to get a single user

router.get('/:id',getSingleUser)

//route to get all users

router.get('/',getAllUsers)

//route to update a user by id

router.patch('/:id',updateUser)

//route to delete a user


router.delete('/:id',deleteUser)

export default router