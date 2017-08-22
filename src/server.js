import Server from "socket.io";
import { addPlayer, removePlayer } from "./core";

let users = [];
let userNumber = 0;

export function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(() => io.emit("state", store.getState().toJS()));

  io.on("connection", socket => {
    var playerName;
    userNumber++;
    socket.on("register", function(data){
      playerName = data.name;
      users[playerName] = socket;
      store.dispatch(addPlayer({ playerName, socket, userNumber }));
      socket.emit("state", store.getState().toJS());
    });
    socket.on("action", store.dispatch.bind(store));
    socket.on("disconnect", action => {
      users[playerName] = null;
      userNumber--;
      store.dispatch(removePlayer({ playerName, socket }));
      console.log(playerName, "disconnected");
      console.log(userNumber, "connected");
    });
  });
}
