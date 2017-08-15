import Server from "socket.io";

export function startServer(store) {
  const io = new Server().attach(8090);

  store.subscribe(() => io.emit("state", store.getState().toJS()));
  var users = [];

  io.on("connection", socket => {
    //console.log("current state", store.getState().toJS());
    socket.emit("state", store.getState().toJS());
    socket.on("action", store.dispatch.bind(store));
    socket.on("disconnect", action => {
      console.log("----->", action);
    });
  });
}
