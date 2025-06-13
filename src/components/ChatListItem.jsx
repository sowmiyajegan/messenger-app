import ChatProfile from './ChatProfile'

function ChatListItem({person, onUserChatClick}) {
    
    const fromUser = false, isdelivered=true
    return (
            <div className="flex-center" onClick={() => onUserChatClick(person.id)}>
                <ChatProfile profile={person.profile} />
                <div className="chat-list-messages">
                    <div className='chat-list-message-title'>{person.name}</div>
                    <div className=''>
                        {fromUser ? (isdelivered ? <img src='https://img.icons8.com/?size=100&id=21740&format=png&color=000000' /> : <img src="https://img.icons8.com/?size=100&id=21730&format=png&color=228BE6" />) : null }
                        Sounds good
                    </div>
                </div>
                <div className="chat-list-time">9:40 am</div>
            </div>
    )
}

export default ChatListItem