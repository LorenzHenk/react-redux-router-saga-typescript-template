import React from 'react';
import { useStyles } from './chat-message-styles';

import { FormattedMessage } from '../chat-history-component';

interface Props {
  message: FormattedMessage;
}

const ChatMessage: React.FC<Props> = ({
  message: { message, timestamp, user, isLeft },
}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${isLeft ? classes.left : classes.right}`}>
      <div className={classes.author}>{user}</div>
      <div className={classes.date}>
        {new Date(timestamp).toLocaleTimeString()}
      </div>
      <div className={classes.message}>{message}</div>
    </div>
  );
};

export default ChatMessage;
