async function findUser(username, room) {
    try {
        const userExists = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username, room }
        })

        if (userExists) {
            await strapi.db.query('plugin::users-permissions.user').update({
                where: { username },
                data: {
                    status: 'ONLINE'
                }
            })
        }
        return userExists;
    } catch (err) {
        console.log("error while fetching", err);
    }
}

async function createUser({ username, room, status, socketId }) {
    try {
        const user = await strapi.db.query('plugin::users-permissions.user').create({
            data: { username, room, status: status, socketId }
        });
        return user;
    } catch (err) {
        console.log("User couldn't be created. Try again!")
    }
}

async function updateUser({ id, data }) {
    try {
        const user = await strapi.db.query('plugin::users-permissions.user').update({
            where: { id: id },
            data: data,
        });

        return user;
    } catch (err) {
        console.log("User couldn't be created. Try again!")
    }
}

async function userExists(id) {
    try {
        // const user = strapi.services.users.findOne({ id: id });
        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { id }
        })
        console.log("USER EXIST ====", user)
        return user;
    } catch (err) {
        console.log("Error occured when fetching user", err);
    }
}

async function createRoom({ roomName }) {
    try {
        const room = await strapi.db.query('api::room.room').create({
            data: { name: roomName }
        });
        return room;
    } catch (err) {
        console.log("Room couldn't be created. Try again!")
    }
}

async function updateRoom({ roomId, data }) {
    try {
        const room = await strapi.db.query('api::room.room').update({
            where: { id: roomId },
            data: data
        });
        return room;
    } catch (err) {
        console.log("Room couldn't be updated. Try again!")
    }
}

async function getUsersInRoom(room) {
    try {
        const usersInRoom = await strapi.db.query('plugin::users-permissions.user').findMany({
            where: { room }
        })
        console.log("USERS IN ROOM ====", usersInRoom)
        return usersInRoom;
    } catch (err) {
        console.log("Error.Try again!", err);
    }
}

async function deleteUser(socketId) {
    try {
        // const user = await strapi.db.query('plugin::users-permissions.user').delete({
        //     where: { socketId: socketId },
        // });
        const user = await strapi.db.query('plugin::users-permissions.user').update({
            where: { socketId: socketId },
            data: {
                socketId: "",
                status: "OFFLINE"
            },
        });
        return user;
    } catch (err) {
        console.log("Error while deleting the User", err);
    }
}

module.exports = {
    findUser,
    createRoom,
    updateRoom,
    createUser,
    updateUser,
    userExists,
    getUsersInRoom,
    deleteUser
}