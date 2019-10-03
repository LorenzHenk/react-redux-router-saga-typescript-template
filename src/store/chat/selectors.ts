import { AppState } from '..';
import { createSelector } from 'reselect';
import { getUserName } from '../system/selectors';

export const getMessages = (state: AppState) => state.chat.messages;

export const getMessagesWithUser = createSelector(
  [getMessages, getUserName],
  (messages, currentUser) =>
    messages.map(message => ({
      ...message,
      isFromCurrentUser: message.user === currentUser,
    })),
);

export type MessagesWithUser = ReturnType<typeof getMessagesWithUser>;

export type MessageWithUser = MessagesWithUser[number];
