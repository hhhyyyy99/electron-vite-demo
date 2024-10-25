const initState = {
  historyMessageList: new Map(),
  uploadProgressList: new Map(),
  currentReplyUser: null,
  currentReplyMsg: null
}

const messageReducer = (state = initState, action: { type: any; payload: any }) => {
  switch (action.type) {
    default:
      return state
  }
}
export default messageReducer
