import { addUser, getUser, getAllUsers, updateUser, deleteUser } from "../controllers/user.controllers.js";
import { Router } from "express";

const userRouter = Router()
userRouter.route('/addUser').post(addUser);
userRouter.route('/getUser/:id').get(getUser);
userRouter.route('/getAllUsers').all(getAllUsers);
userRouter.route('/udateUser/:id').patch(updateUser);
userRouter.route('/deleteUser/:id').delete(deleteUser);

export default userRouter;