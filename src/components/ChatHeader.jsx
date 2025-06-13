import ChatProfile from "./ChatProfile"

function ChatHeader({user}) {
    if(!user) return
    return (
        <div className="flex-center chat-header padding-5">
                <ChatProfile profile={user.profile} />
                <div className="padding-5">
                    <div className='chat-list-message-title'>{user.name}</div>
                    <div>{user.status}</div>
                </div>

        </div>
    )
}

export default ChatHeader