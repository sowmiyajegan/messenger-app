const CURRENT_USER_ID = 0

function ChatMessages({messages = []}) {
    return (
        <div className="flex-grow-1 messages-container">
            {messages.map(item => {
                return (
                    <div className={`bubble ${item.sender === CURRENT_USER_ID ? 'bubble-right-aligned' : ''}`}>
                        {item.text}
                    </div>
                )
            })}
        </div>
    )
}

export default ChatMessages