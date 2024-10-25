export const SET_MESSAGES = 'SET_MESSAGES';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: messages,
});

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const updateMessage = (message) => ({
  type: UPDATE_MESSAGE,
  payload: message,
});

export const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});