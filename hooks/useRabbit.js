import { useEffect, useState } from "react";
import { Stomp } from "@stomp/stompjs";

export function useRabbit() {
  const [client, setClient] = useState(null);
  useEffect(() => {
    var ws = new WebSocket("ws://127.0.0.1:15674/ws");
    var stompClient = Stomp.over(ws);
    var on_connect = function () {
      console.log("connected");
      //   client.debug = null
      setClient(stompClient);
    };
    var on_error = function () {
      console.log("error");
    };
    stompClient.connect("guest", "guest", on_connect, on_error, "/");
    return () => {
        console.log("unmount")
        ws.close()
    }
  }, []);
  return client;
}
