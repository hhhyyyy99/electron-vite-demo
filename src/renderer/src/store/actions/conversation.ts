export const SET_CONVERSATION = 'SET_CONVERSATION';
export const UPDATE_CONVERSATION = 'UPDATE_CONVERSATION';
export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION';

export const setConversation = (conversation) => ({
  type: SET_CONVERSATION,
  payload: conversation,
});

export const updateConversation = (conversation) => ({
  type: UPDATE_CONVERSATION,
  payload: conversation,
});

export const removeConversation = (conversationId) => ({
  type: REMOVE_CONVERSATION,
  payload: conversationId,
});