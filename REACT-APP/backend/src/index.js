'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

    // const io = require("socket.io")(strapi.server.httpServer);
    const { findUser, createUser, userExists, getUsersInRoom, deleteUser, updateUser, createRoom, updateRoom } = require('../app/config/functions/utils/database');

    const { Server } = require('socket.io')
    const io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my - custom - header"],
        credentials: true
      }
    })

    io.on('connection', function (socket) {
      socket.on('join', async ({ username, room }, callback) => {
        try {
          const userExists = await findUser(username, room);
          let user = null

          const roomCreated = await createRoom(room)

          if (userExists) {
            if (userExists.status === "ONLINE") {
              callback(`User ${username} already exists in room no${room}. Please select a different name or room`);
              return
            } else {
              user = await updateUser({ id: userExists.id, data: { status: "ONLINE", socketId: socket.id, room: room } })
            }
          } else {
            user = await createUser({
              username: username,
              room: room,
              status: "ONLINE",
              socketId: socket.id
            });
          }

          if (user) {
            await updateRoom({ roomId: roomCreated.id, data: { users: [user.id] } })
            socket.join(user.room);
            socket.emit('welcome', {
              user: 'bot',
              text: `${user.username}, Welcome to room ${user.room}.`,
              userData: user
            });
            socket.broadcast.to(user.room).emit('message', {
              user: 'bot',
              text: `${user.username} has joined`,
            });

          } else {
            callback(`user could not be created. Try again!`)
          }

          callback();
        } catch (err) {
          console.log("Err occured, Try again!", err);
        }
      })

      socket.on('sendMessage', async (data, callback) => {
        try {
          const user = await userExists(data.userId);
          if (user) {
            io.to(user.room).emit('message', {
              user: user.username,
              text: data.message,
            });
            io.to(user.room).emit('roomInfo', {
              room: user.room,
              users: await getUsersInRoom(user.room)
            });
          } else {
            callback(`User doesn't exist in the database. Rejoin the chat`)
          }
          callback();
        } catch (err) {
          console.log("err inside catch block", err);
        }
      });

      socket.on('disconnect', async (data) => {
        console.log('DISCONNECT SOCKET DATA =====', data)
        try {
          console.log("DISCONNECTED!!!!!!!!!!!!");
          const user = await deleteUser(socket.id);
          console.log("deleted user is", user)
          if (user) {
            io.to(user.room).emit('message', {
              user: user.username,
              text: `User ${user.username} has left the chat.`,
            });
            io.to(user.room).emit('roomInfo', {
              room: user.room,
              users: await getUsersInRoom(user.room)
            });
          }
        } catch (err) {
          console.log("error while disconnecting", err);
        }
      });

    });

    strapi.io = io
  },

};
