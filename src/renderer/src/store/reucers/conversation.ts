const initState = {
  unreadCount: 0,
  conversationList: [],
  currentSelectedConversation: null,
  isLoading: true
}

const conversationReducer = (state = initState, action: { type: any; payload: any }) => {
  switch (action.type) {
    default:
      return state
  }
}
export default conversationReducer
