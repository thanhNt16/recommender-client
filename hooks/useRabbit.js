import { useEffect, useState } from "react";
import { Stomp } from "@stomp/stompjs";

export function useRabbit() {
  const [client, setClient] = useState(null);
  useEffect(() => {
    var stompClient = Stomp.over(function () {
      return new WebSocket("wss://rabbitmq.recengine.tech/ws")
    });
    
    var on_connect = function () {
      console.log("connected");
      //   client.debug = null
      setClient(stompClient);
    };
    var on_error = function () {
      console.log("error");
    };
    stompClient.connect("rabbitmq", "rabbitmq", on_connect, on_error, "/");
    stompClient.debug = function (str) {};
    stompClient.reconnectDelay = 300;
    stompClient.heartbeatIncoming = 5000;
    stompClient.heartbeatOutgoing = 5000;
    // stompClient.onConnect(() => console.log('connected'))
    // stompClient.onDisconnect(() => console.log('disconnected'))
    stompClient.onChangeState(function () {
      if (window.ws.readyState === 2) {
        var retryws = new WebSocket("wss://rabbitmq.recengine.tech/ws");
        stompClient = Stomp.over(retryws);
        stompClient.connect("rabbitmq", "rabbitmq", on_connect, on_error, "/");
      }
    });
    return () => {
      console.log("unmount");
      // if (ws && ws.readyState === 1) ws.close();
    };
  }, []);
  return client;
}
