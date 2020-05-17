const getUsersById = (req,res) => {
    const { id_user } = req.params;
    res.end(id_user);
}

const updateUserById = (req,res) =>{
    res.end("Update Users");
}

const deleteUserById = (req,res) =>{
    res.end("Delete User");
}

module.exports = {
    getUsersById,
    updateUserById,
    deleteUserById
}