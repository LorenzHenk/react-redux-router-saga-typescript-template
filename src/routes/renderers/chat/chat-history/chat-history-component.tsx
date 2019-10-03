import React from 'react';

import ChatMessage from './chat-message';
import { useStyles } from './chat-history-styles';

import { MessagesWithUser } from '../../../../store/chat/selectors';

interface OwnProps {
  messages: MessagesWithUser;
}

type Props = OwnProps;

export const ChatHistoryComponent: React.FC<Props> = ({ messages }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {messages.map(message => (
        <ChatMessage message={message} key={message.timestamp} />
      ))}
    </div>
  );
};

export default ChatHistoryComponent;
