const users = []

const addUser = ({ id, uuid, name})=>{
    // name = name.trim().toLowerCase()
    const existingUserId = users.find((user)=>user.uuid === uuid && user.name === name)
    if(existingUserId){
        return { error: 'ID already taken'}
    }
    const user = { id, uuid, name}
    users.push(user)
    return {user};
}

const removeUser = (id)=>{
    const index = users.findIndex((user)=> user.id === id);
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id)=> users.find(()=>user.id === id);

const getUsersInChat = (uuid) => users.filter((user)=>user.uuid === uuid)

module.exports = {
    addUser, 
    removeUser,
    getUser,
    getUsersInChat 
}