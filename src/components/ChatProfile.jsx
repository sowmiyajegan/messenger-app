function ChatProfile({profile}) {
    return (
        <img className="chat-profile" height="60" width="60" src={profile || "https://media.istockphoto.com/id/2151669184/vector/vector-flat-illustration-in-grayscale-avatar-user-profile-person-icon-gender-neutral.jpg?s=612x612&w=0&k=20&c=UEa7oHoOL30ynvmJzSCIPrwwopJdfqzBs0q69ezQoM8="} />
    )
}

export default ChatProfile