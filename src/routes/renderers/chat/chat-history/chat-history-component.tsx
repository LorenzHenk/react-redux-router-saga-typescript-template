import React from 'react';

import { Message } from '../../../../store/chat/types';

import ChatMessage from './chat-message';
import { useStyles } from './chat-history-styles';

export interface FormattedMessage extends Message {
  isLeft: boolean;
}

interface OwnProps {
  messages: FormattedMessage[];
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
