import { User } from "../models/user.models.js"

const addUser = async (req, res) => {
    let body = req.body;
    if (!body || !body.firstName || !body.lastName || !body.email || !body.password) {
        return res.status(404).json({ msg: "All filds are requierd" });
    }

    let result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password
    });
    console.log("result::>", result);

    return res.status(201).json({ meg: "Success" });
}

const getUser = async (req, res) => {
    const getUser = await User.findById(req.params.id);
    if (!getUser) {
        return res.status(404).json({ msg: `No User Found with Id:${req.params.id}` });
    }
    return res.status(200).send(getUser);
}

const getAllUsers = async (req, res) => {
    const allUser = await User.find({});
    return res.status(200).send(allUser);
}

const updateUser = async (req, res) => {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body);
    if (!updateUser) {
        return res.status(404).json({ msg: `No User Found with Id:${req.params.id}` });
    }
    return res.status(200).json({ msg: `User Updated With Id: ${req.params.id}` });
}

const deleteUser = async (req, res) => {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if(!deleteUser){
        return res.status(404).json({ msg: `No User Found with Id:${req.params.id}` });
    }
    return res.status(200).json({ msg: `User Deleted With Id: ${req.params.id}` });
}
export { addUser, getUser, getAllUsers, updateUser, deleteUser }