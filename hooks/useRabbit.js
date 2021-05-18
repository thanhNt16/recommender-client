import { useEffect, useState } from "react";
import { Stomp } from "@stomp/stompjs";
// import WebSocket from 'ws'

export function useRabbit() {
  const [client, setClient] = useState(null);
  useEffect(() => {
    // var stompClient = Stomp.over(function () {
    //   var url = "ws://139.59.107.94:15674/ws";
    //   var client = Stomp.overWS(url);
    //   // var ws = new SockJS(url);

    //   return new WebSocket("ws://139.59.107.94:15674/ws");
    // });
   
    var url = "wss://rabbit.recengine.games/ws";

    var stompClient = Stomp.client(url);
    
    // var on_connect = function () {
    //   console.log("connected");
    //   //   client.debug = null
    //   setClient(stompClient);
    // };
    // var on_error = function (error) {
    //   console.log("error", error);
    // };
    var headers = {
      login: 'rabbitmq',
      passcode: 'rabbitmq',
      // additional header
      'client-id': 'rabbitmq'
    };
    stompClient.connect(headers, function () {
      setClient(stompClient)
      
    });
    stompClient.debug = function (str) {};
    stompClient.reconnectDelay = 3000;
    stompClient.heartbeatIncoming = 5000;
    stompClient.heartbeatOutgoing = 5000;
    
    // stompClient.onConnect(() => console.log('connected'))
    // stompClient.onDisconnect(() => console.log('disconnected'))
    stompClient.onChangeState(function () {
      if (window.ws.readyState === 2) {
        var headers = {
          login: 'rabbitmq',
          passcode: 'rabbitmq',
          // additional header
          'client-id': 'rabbitmq'
        };
        stompClient.connect(headers, function () {
          setClient(stompClient)
          
        });
        stompClient.debug = function (str) {};
        stompClient.reconnectDelay = 3000;
        stompClient.heartbeatIncoming = 5000;
        stompClient.heartbeatOutgoing = 5000;
      }
    });
    return () => {
      console.log("unmount");
      // if (ws && ws.readyState === 1) ws.close();
    };
  }, []);
  return client;
}
