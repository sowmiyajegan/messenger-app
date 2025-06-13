import { useDispatch, useSelector } from "react-redux";
import ChatListItem from "../components/ChatListItem"
import { setCurrentSelectedChat } from "../redux/actions";
import { useEffect } from "react";

function ChatList() {
    const dispatch = useDispatch();
    const { messagedUsers } = useSelector(
        (state) => state.chatReducer
    );

    useEffect(() => {
        dispatch(setCurrentSelectedChat(1));
    }, [dispatch]);

    function onUserChatClick(id) {
        dispatch(setCurrentSelectedChat(id));
    }

    return (
        <div>
            <h1>Messenger</h1>
            {/* Search chat */}
            <div className="sidebar-chat">
                {messagedUsers.map(item => {
                    return (
                        <>
                            <ChatListItem person={item} onUserChatClick={onUserChatClick}/>
                            <hr />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ChatList