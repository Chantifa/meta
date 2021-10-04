import {useEffect, useRef, useState} from "react";
import io from "socket.io-client";
import {CHAT_REQUEST, JOIN_ROOM} from "./common/Requests.js";
import {CHAT_ANNOUNCEMENT, CHAT_MESSAGE, ERROR} from "./common/Responses.js";

export default function useServer(userName, roomName) {
    const socketRef = useRef(null)

    const [messageList, setMessageList] = useState([])

    useEffect(() => {
            //setup
            if (socketRef.current === null) {
                console.log("connect")
                socketRef.current = io.connect("/")
            }
            const {current: socket} = socketRef;

            //join room
            socket.emit(JOIN_ROOM.id, {...JOIN_ROOM.getDto(), userName, roomName})

            //event handlers

            socket.on(ERROR.id, (message) => {
                console.error(message)
            })

            socket.on(CHAT_ANNOUNCEMENT.id, (data) => {
                setMessageList((old) => {
                    return [...old, data]
                })
                console.log(CHAT_ANNOUNCEMENT.id)
            })

            socket.on(CHAT_MESSAGE.id, (data) => {
                setMessageList((old) => {
                    return [...old, data]
                })
                console.log(CHAT_MESSAGE.id)
            })

            //Cleanup of the hook
            return () => {
                console.log("disconnect")
                socket.removeAllListeners([CHAT_ANNOUNCEMENT.id, CHAT_MESSAGE.id], ERROR.id)
                socket.disconnect()
            }
        }
        , [userName, roomName])

    //Request methods
    function sendMessage(message) {
        socketRef.current.emit(CHAT_REQUEST.id, CHAT_REQUEST.getDto(message))
    }
}
