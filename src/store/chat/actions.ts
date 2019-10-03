import {
  Message,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  RECEIVE_MESSAGE,
} from './types';

export function sendMessage(message: Message) {
  return {
    type: SEND_MESSAGE,
    payload: message,
  };
}

export function receiveMessage(message: Message) {
  return {
    type: RECEIVE_MESSAGE,
    payload: message,
  };
}

export function deleteMessage(timestamp: number) {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}
