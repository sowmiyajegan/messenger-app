
// Action types
export const SEND_MESSAGE = 'SEND_MESSAGE'
export const CURRENT_SELECTED_CHAT = 'CURRENT_SELECTED_CHAT'

// Action creators
export const sendNewMessage = (payload) => {
    return {
        type: SEND_MESSAGE,
        payload
    }
}

export const setCurrentSelectedChat = (id) => {
    return {
        type: CURRENT_SELECTED_CHAT,
        payload: {
            userId: id
        }
    }
}
