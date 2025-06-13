import { combineReducers } from 'redux'
import { messagedUsers } from '../../data/messagedUsers'
import { conversations } from '../../data/conversations'
import { SEND_MESSAGE, CURRENT_SELECTED_CHAT } from '../actions'

const initialState = {
    messagedUsers: messagedUsers,
    conversations: conversations,
    currentSelectedChatId: 1
}

function getConversations(conversations, currentSelectedChatId, newMsg) {
    return conversations.map(conversation => {
        if (conversation.user === currentSelectedChatId) {
            return {
                ...conversation,
                messages: [...conversation.messages, newMsg]
            };
        }
        return conversation;
    });
}


const chatReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: {
            return {
                ...state, 
                conversations: getConversations(state.conversations, state.currentSelectedChatId, action.payload)
            }
        }
        case CURRENT_SELECTED_CHAT: {
            return {...state, currentSelectedChatId: action.payload.userId}
        }
        default: {
            return state
        }
    }
}


const rootReducer = combineReducers({chatReducer})
export default rootReducer