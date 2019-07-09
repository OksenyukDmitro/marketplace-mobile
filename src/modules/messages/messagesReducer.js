import { handleActions } from '@letapp/redux-actions';
import * as actions from './messagesActions';

const INITIAL_STATE = {
  items: {
    // [chatId]: [],
  },
  sendMessage: {
    isLoading: false,
    error: null,
    isError: false,
  },
  fetchMessages: {
    isLoading: false,
    error: null,
    isError: false,
  },
};

export default handleActions(
  {
    [actions.sendMessage.start]: (
      state,
      { payload: { result, chatId } },
    ) => { 
      
      return {
        ...state,
        items: {
          ...state.items,
          [chatId]: [result].concat(state.items[chatId] || []),
        },
        sendMessage: {
          ...state.sendMessage,
          isLoading: true,
          error: null,
          isError: false,
        },
      };
    },
    [actions.sendMessage.success]: (
      state,
      { payload: { result, chatId, oldMessageId } },
    ) => {
      const items = [result].concat(
        state.items[chatId].filter((i) => i !== oldMessageId),
      );
      return {
        ...state,
        items: {
          ...state.items,
          [chatId]: items,
        },
        sendMessage: {
          ...state.sendMessage,
          isLoading: false,
        },
      };
    },
    [actions.sendMessage.error]: (state, action) => ({
      ...state,
      sendMessage: {
        ...state.sendMessage,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
    [actions.fetchMessages.start]: (state) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: true,
        error: null,
        isError: false,
      },
    }),
    [actions.fetchMessages.success]: (
      state,
      { payload: { chatId, result } },
    ) => ({
      ...state,
      items: {
        ...state.items,
        [chatId]: result,
      },
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
      },
    }),
    [actions.fetchMessages.error]: (state, action) => ({
      ...state,
      fetchMessages: {
        ...state.fetchMessages,
        isLoading: false,
        error: action.payload,
        isError: true,
      },
    }),
  },
  INITIAL_STATE,
);
