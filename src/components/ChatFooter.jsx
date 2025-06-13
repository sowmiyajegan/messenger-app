import { useDispatch } from "react-redux"
import { sendNewMessage } from "../redux/actions";
import { useRef } from "react";

const CURRENT_USER_ID = 0

function ChatFooter() {
    const dispatch = useDispatch();
    const textAreaRef = useRef()

    function handleSendMsg() {
        if(!textAreaRef.current.value) return
        dispatch(sendNewMessage(
            {
                text: textAreaRef.current.value,
                sender: CURRENT_USER_ID
            }
        ));
        textAreaRef.current.value = ''
    }

    return (
        <div className="flex-center padding-5">
            <textarea className="text-editor" ref={textAreaRef}/>
            <button onClick={handleSendMsg} className="text-send-btn">Send</button>
        </div>
    )
}

export default ChatFooter