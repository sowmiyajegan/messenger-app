import { useSelector } from "react-redux";
import ChatFooter from "../components/ChatFooter"
import ChatHeader from "../components/ChatHeader"
import ChatMessages from "../components/ChatMessages"

function ChatWindow() {
    const chatData = useSelector(
        (state) => {
            const { currentSelectedChatId, conversations } = state.chatReducer
            return conversations.find( item => item.user === currentSelectedChatId)
        }
    )

    const userInfo = useSelector((state) => {
        const { currentSelectedChatId, messagedUsers } = state.chatReducer
        return messagedUsers.find( item => item.id === currentSelectedChatId)
    })

    return (
        <div className="full-width chat-window">
            <ChatHeader user={userInfo}/>
            <ChatMessages messages={chatData?.messages} />
            <ChatFooter />
        </div>
    )
}

export default ChatWindow